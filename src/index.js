import React from "react";
import ReactDOM from "react-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss";
import "./assets/font/stylesheet.css"


import Header from './component/header'
import Footer from './component/footer'
import Content from './component/content'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));