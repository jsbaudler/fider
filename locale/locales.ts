interface Locale {
  text: string
}

const locales: { [key: string]: Locale } = {
  en: {
    text: "English",
  },
  ja: {
    text: "日本語",
  },
  "pt-BR": {
    text: "Portuguese (Brazilian)",
  },
  "es-ES": {
    text: "Spanish",
  },
  de: {
    text: "German",
  },
  fr: {
    text: "French",
  },
  "sv-SE": {
    text: "Swedish",
  },
  nl: {
    text: "Dutch",
  },
  pl: {
    text: "Polish",
  },
  ru: {
    text: "Russian",
  },
  sk: {
    text: "Slovak",
  },
  tr: {
    text: "Turkish",
  },
  el: {
    text: "Greek",
  },
}

export default locales
