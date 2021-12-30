import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { App } from './App';
import { Slide, ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <ToastContainer transition={Slide} theme="colored" />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
