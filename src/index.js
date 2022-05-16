import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Slide, ToastContainer } from "react-toastify";
import { GlobalStyle } from "global";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";
import { AppProvider } from "context/AppContext";

const theme = createTheme({
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
        primary: {
            main: "#fb6b6b",
        },
        secondary: {
            main: "#FFF",
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter> <AppProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
                <ToastContainer transition={Slide} theme="colored" limit={3} />
            </ThemeProvider>
        </AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
