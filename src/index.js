import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

//Ключ API (v3 auth) ef67f56e6a03a8573aa8d4dddcc93e68
//https://api.themoviedb.org/3/movie/550?api_key=ef67f56e6a03a8573aa8d4dddcc93e68
//Ключ доступа к API (v4 auth) eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjY3ZjU2ZTZhMDNhODU3M2FhOGQ0ZGRkY2M5M2U2OCIsInN1YiI6IjYwNTExMGJiMWQ4MjBmMDAyODFmM2I0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WampQ5jfO6uQkwX4KPnP_Indnb48R1h4CbyqkHxQHk

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
