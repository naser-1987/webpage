import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './components/Contact/index';
import NavBar from './components/NavBar/index';
import Home from "./components/Home";
import MainHome from "./components/MainHome/MainHome"
class App extends Component {
  componentDidMount(){
    <Home />
  }
  render(){
    return (
    <BrowserRouter >
      <NavBar />
      <Route exact path = "/" component={MainHome} />
      <Route exact path = "/Contact"  component={Contact} />
    </BrowserRouter>
    );
  }
}export default App;