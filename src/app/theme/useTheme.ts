import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseTheme {
    theme: Theme;
    toggleTheme: () => void;
}

const useTheme = (): UseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };


    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;