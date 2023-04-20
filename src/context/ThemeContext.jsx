import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import data from "../data";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [contextTheme, setContextTheme] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    )
    const [list, setList] = useState(data)
    const handleClick = () => {
        setContextTheme(!contextTheme)
    }
    useEffect(() => {
        localStorage.setItem('darkMode', contextTheme)

    }, [contextTheme])
    
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(list));
      }, [list]);
      
    return (
        <ThemeContext.Provider value={{
            contextTheme,
            setContextTheme,
            handleClick,
            list,
            setList
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () => {
    return useContext(ThemeContext)
}