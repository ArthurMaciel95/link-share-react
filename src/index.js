import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { GlobalStyle } from "global";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";
import { AppProvider, ColorModeContextProvider } from "context";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./i18n"

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <ColorModeContextProvider>
                    <GlobalStyle />
                    <App />
                    <ToastContainer transition={Slide} theme="colored" limit={3} />
                </ColorModeContextProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
