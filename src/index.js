import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HeaderTitleProvider } from './store/HeaderTitleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeaderTitleProvider>

    <BrowserRouter>
        <App />
    </BrowserRouter>
    </HeaderTitleProvider>

)
