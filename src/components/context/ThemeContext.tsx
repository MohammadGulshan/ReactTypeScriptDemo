import { createContext } from "react";
import { theme } from "./theme";

type themeContextProviderProps = {
	children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: themeContextProviderProps) => {
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}