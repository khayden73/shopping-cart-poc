import { Themes } from "../config/themes";

function getThemeById(id: string) {
  return Themes[id];
}

export { getThemeById };
