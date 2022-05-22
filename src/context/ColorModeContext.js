import React, { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';


export const colorModeContext = createContext({
    toggleColorMode: () => { },
    mode: 'light',
});

export const ColorModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        mode,
    }),
        [mode]
    );

    const theme = useMemo(
        () => {
            return createTheme({
                palette: {
                    mode
                }
            })
        },
        [mode]
    )

    return (
        <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </colorModeContext.Provider>
    )
}

export const useColorMode = () => useContext(colorModeContext)


