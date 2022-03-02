import { createTheme } from "@mui/material/styles";

export const getThemeLight = {
    palette: {
        mode: "light",
    },
};

export const getThemeDark = {
    palette: {
        mode: "dark",
    },
};
const themeLight = createTheme(getThemeLight);
const themeDark = createTheme(getThemeDark);
const themeAdvery = createTheme(getThemeAdvery);
const themeBrueggli = createTheme(getThemeBrueggli);
export const getCurrentTheme = (theme) => {
    switch (theme) {
        case "light":
            return themeLight;
        case "dark":
            return themeDark;
        case "advery":
            return themeAdvery;
        case "brueggli":
            return themeBrueggli;
    }
};