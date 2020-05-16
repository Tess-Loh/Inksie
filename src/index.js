import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './component/app'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./style/main.scss";
// import "./assets/font/stylesheet.css"
// import Header from './component/header'
// import Footer from './component/footer'
// import Content from './component/content'


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));