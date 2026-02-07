export enum THEME_MEDIA_ENUM {
  large = "@media screen and (min-width: 1200px)",
  medium = "@media screen and (max-width: 1199px)",
  small = "@media screen and (max-width: 835px)",
}

export function colors(darkMode = false) {
  return {
    bg1: darkMode ? "#232323" : "#d0d0d0",
    primary: "#00a4ff"
  };
}

export function theme(darkMode = false) {
  return {
    ...colors(darkMode),
  };
}
