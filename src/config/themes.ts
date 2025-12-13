import { createTheme } from "@mui/material";
import { orange, common, deepOrange, yellow } from "@mui/material/colors";

type AppTheme = {
  id: string;
  name: string;
  isDark: boolean;
  config: ReturnType<typeof createTheme>;
};

const Themes: Record<string, AppTheme> = {
  light1: {
    id: "light1",
    name: "Light Default",
    isDark: false,
    config: createTheme({
      palette: {
        mode: "light",
      },
    }),
  },
  dark1: {
    id: "dark1",
    name: "Dark Default",
    isDark: true,
    config: createTheme({
      palette: {
        mode: "dark",
      },
    }),
  },
  autumn1: {
    id: "autumn1",
    name: "Autumn light",
    isDark: false,
    config: createTheme({
      palette: {
        mode: "light",
        background: {
          default: orange[100],
        },
        primary: {
          main: deepOrange[900],
        },
        secondary: {
          main: common.black,
        },
      },
    }),
  },
  autumn2: {
    id: "autumn2",
    name: "Autumn Dark",
    isDark: true,
    config: createTheme({
      palette: {
        mode: "dark",
        background: {
          default: deepOrange[900],
        },
        primary: {
          main: yellow[100],
        },
        secondary: {
          main: common.white,
        },
      },
    }),
  },
};

const DEFAULT_THEME = "light1";

export { Themes, DEFAULT_THEME };
export type { AppTheme };
