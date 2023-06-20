import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContextProvider from './context/AppContext';
import App from './App';
import AppNew from './AppNew';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider >
        {/* <App /> */}
        <AppNew />
    </AppContextProvider>
);
