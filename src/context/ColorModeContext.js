import React, { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey, orange, yellow, lightBlue } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
    mode: 'light',
});

export const ColorModeContextProvider = ({ children }) => {
    //- verifica se no sistema operacional está usando um tema escuro
    /*     const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
        const initialTheme = prefersDarkMode ? 'dark' : 'light' */
    const initialTheme = 'light'
    const [mode, setMode] = useState(initialTheme);
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        mode,
    }),
        [mode]
    );

    const theme = useMemo(() => {
        return createTheme({
            components: {
                MuiButton: {
                    variants: [
                        {
                            props: { variant: "contained", color: "primary" },
                            style: {
                                textTransform: "none",
                                color: "#FFF",
                                boxShadow: "none",
                            },
                        },
                        {
                            props: { variant: "outlined", color: "primary" },
                            style: {
                                textTransform: "none",
                                color: "#fb6b6b",
                            },
                        },
                    ],
                },
            },
            palette: {
                mode,
                ...(mode === 'light'
                    ? {
                        // palette values for light mode
                        primary: {
                            main: '#fb6b6b',
                        },
                        text: {
                            primary: grey[900],
                            secondary: grey[800],
                        },
                    }
                    : {
                        // palette values for dark mode
                        primary: {
                            main: lightBlue[500],
                        },
                        background: {
                            default: '#000',
                            paper: '#121212',
                        },
                        text: {
                            primary: '#fff',
                            secondary: 'rgba(255, 255, 255, 0.7)',
                        },
                    }),
            }
        })
    },
        [mode]
    )

    return (
        <ColorModeContext.Provider value={ColorModeContext}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
}