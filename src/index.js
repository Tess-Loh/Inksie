import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss";
import "./assets/font/stylesheet.css"


import Header from './component/header'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));