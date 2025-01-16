'use client';

import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
    }, [theme])

    useEffect(() => {
        const $layout = document.querySelector('.layout') as HTMLElement;

        if(theme === 'light'){
            $layout.classList.add('light');
            $layout.classList.remove('dark');
        }else {
            $layout.classList.remove('light')
            $layout.classList.add('dark')
        }

    },[theme])


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = ():ThemeContextType => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    return context;
}
