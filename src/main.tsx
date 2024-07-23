import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'

import { Provider } from 'react-redux';
import { store } from '@src/app/store';

ReactDOM.createRoot(document.getElementById('container-wrap-wrap')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)