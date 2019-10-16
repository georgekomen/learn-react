import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
   render() {
     return (
    <div className="App">
      <div onClick = {this.props.onClick}> clicks:  {this.props.clicks} </div>
    </div>
  );
 }
}

export default App;
