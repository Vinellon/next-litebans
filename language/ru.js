const language = {
  info: {
    country_code: "RU",
    lang_name: "Русский"
  },
  site: {
    description: "Простой и легкий веб-интерфейс наказаний Lumika."
  },
  words: {
    bans: {
      singular: "Бан",
      plural: "Баны"
    },
    mutes: {
      singular: "Мут",
      plural: "Муты"
    },
    kicks: {
      singular: "Кик",
      plural: "Кики"
    },
    warns: {
      singular: "Варн",
      plural: "Варны"
    },
    yes: "Да",
    no: "Нет",
    player: "Игрок",
    staff: "Модератор",
    reason: "Причина",
    date: "Дата",
    expires: "Истекает",
    originServer: "Получено на",
    notified: "Уведомлен(а)",
  },
  pages: {
    home: {
      title: "Главная",
      subtitle: "Главная страница наказаний Lumika!"
    },
    history: {
      title: "История",
      subtitle: "Общее количество наказаний: {total}",
      table: {
        heads: {
          type: "Тип",
          player: "Игрок",
          by: "Выдал(а)",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пермач",
        expire_not_applicable: "Н/Д",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      }
    },
    bans: {
      title: "Баны",
      subtitle: "Количество банов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Выдал(а)",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пермач",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      },
      info: {
        title: "Бан #{id}",
        badges: {
          ipban: "IP Бан",
          active: "Активно",
          expired: "Истекло",
          permanent: "Пермач",
        }
      }
    },
    mutes: {
      title: "Муты",
      subtitle: "Количество мутов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Выдал(а)",
          reason: "Причина",
          date: "Дата",
          expires: "Истекает"
        },
        permanent: "Пермач",
        active: {
          true: "Активно",
          temporal: "Временное",
          false: "Истекло"
        }
      },
      info: {
        title: "Мут #{id}",
        badges: {
          ipmute: "IP Мут",
          active: "Активно",
          expired: "Истекло",
          permanent: "Пермач",
        }
      }
    },
    warns: {
      title: "Варны",
      subtitle: "Количество варнов: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Выдал(а)",
          reason: "Причина",
          date: "Дата",
          notified: "Уведомлен(а)"
        },
      },
      info: {
        title: "Варн #{id}"
      }
    },
    kicks: {
      title: "Кики",
      subtitle: "Количество киков: {total}",
      table: {
        heads: {
          player: "Игрок",
          by: "Выдал(а)",
          reason: "Причина",
          date: "Дата"
        }
      },
      info: {
        title: "Кик #{id}"
      }
    },
    playerHistory: {
      title: "{player}"
    },
    errors: {
      notFound: {
        title: "404",
        description: "Кто-то заблудился, вернитесь-ка на главную!",
        button: "Назад на главную страницу"
      }
    }
  },
  pagination: {
    previous: "Предыдущая",
    next: "Следующая"
  },
  notifications: {
    playerNotFound: {
      title: "Ошибка",
      description: "Игрока нет в базе данных.",
    }
  }
}
module.exports = language;