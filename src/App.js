import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Authoquiz from './components/Authoquiz.js';


 class App extends Component {
   render() {
     return (
    <div className="App">
      <Authoquiz />
    </div>
  );
 }
}

export default App;
