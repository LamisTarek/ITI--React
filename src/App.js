import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Component } from 'react';
import Routes from './Routes';
class App extends Component{
  render(){
    return(
      <RouterProvider router={Routes}/>
    );
  }

}

export default App;
