import { Prisma } from "@prisma/client";
import { db } from "../db";
import { PunishmentListItem } from "@/types";
import { Dictionary } from "../language/types";

const getPunishmentCount = async (player?: string) => {
  const bans = await db.litebans_bans.count({
    where: {
      uuid: player
    }
  });
  const mutes = await db.litebans_mutes.count({
    where: {
      uuid: player
    }
  });
  const warns = await db.litebans_warnings.count({
    where: {
      uuid: player
    }
  });
  const kicks = await db.litebans_kicks.count({
    where: {
      uuid: player
    }
  });

  return { bans, mutes, warns, kicks }
}

const getPlayerName = async (uuid: string) => {
  const player = await db.litebans_history.findFirst({
    where: {
      uuid
    },
    orderBy: {
      date: 'desc'
    },
    select: {
      name: true
    }
  });

  return player?.name;
}

const getPunishments = async (page: number, player?: string) => {
  const query = Prisma.sql`
  (
    SELECT id, uuid, banned_by_name, banned_by_uuid, reason, time, until, active, 'ban' AS 'type' FROM litebans_bans ${player ? Prisma.sql`WHERE uuid = ${player}` : Prisma.sql``}
    UNION ALL 
    SELECT id, uuid, banned_by_name, banned_by_uuid, reason, time, until, active, 'mute' AS 'type' FROM litebans_mutes ${player ? Prisma.sql`WHERE uuid = ${player}` : Prisma.sql``}
    UNION ALL 
    SELECT id, uuid, banned_by_name, banned_by_uuid, reason, time, until, active, 'warn' AS 'type' FROM litebans_warnings ${player ? Prisma.sql`WHERE uuid = ${player}` : Prisma.sql``}
    UNION ALL 
    SELECT id, uuid, banned_by_name, banned_by_uuid, reason, time, until, active, 'kick' AS 'type' FROM litebans_kicks ${player ? Prisma.sql`WHERE uuid = ${player}` : Prisma.sql``}
  ) 
  ORDER BY time DESC
  LIMIT 10
  OFFSET ${(page - 1) * 10}
  `
  const punishments = await db.$queryRaw(query) as PunishmentListItem[];

  return punishments;
}

const sanitizePunishments = async (dictionary: Dictionary, punishments: PunishmentListItem[]) => {
  const sanitized = await Promise.all(punishments.map(async (punishment) => {
    const name = await getPlayerName(punishment.uuid!);
    const until = (punishment.type == "ban" || punishment.type == "mute") ? 
                    punishment.until.toString() === "0" ? 
                    dictionary.table.permanent : 
                    new Date(parseInt(punishment.until.toString())) : 
                  "";
    const status = (punishment.type == "ban" || punishment.type == "mute") ?
                    until == dictionary.table.permanent ? 
                    (punishment.active ? true : false) : 
                    (until < new Date() ? false : undefined) :
                  undefined;
    return {
      ...punishment,
      id: punishment.id.toString(),
      time: new Date(parseInt(punishment.time.toString())),
      console: punishment.banned_by_uuid === "[Console]",
      status,
      until,
      name
    }
  }));

  return sanitized;
}

export { getPunishmentCount, getPlayerName, getPunishments, sanitizePunishments }