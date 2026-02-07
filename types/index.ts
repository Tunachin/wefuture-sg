export interface IAppState {
  themeMode: THEME_MODE_ENUM,
  language: LANGUAGE_ENUM,
}
export enum THEME_MODE_ENUM {
  light = "light",
  dark = "dark",
}
export enum LANGUAGE_ENUM {
  zh_CN = "zh_CN",
  en_US = "en_US",
}
export enum LANGUAGE_NAME_ENUM {
  zh_CN = "中文",
  en_US = "English",
}
