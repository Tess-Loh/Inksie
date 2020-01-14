import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss";


import Header from './component/header'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Tester</p>
      </div>
    )
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));