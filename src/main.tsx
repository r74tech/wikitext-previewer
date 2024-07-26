import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@src/app/store';
import App from './App';
import SharePage from '@src/layouts/SharePage';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('container-wrap-wrap')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/share/:shortId" element={<SharePage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
