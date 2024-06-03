import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import App from './App';
import { store } from "./store";

// export const ROOT_URL = "http://localhost:3333/";// переменная для сервер запросов

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


