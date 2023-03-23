import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import About from './components/About';
import Bids from './components/Bids';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App({store}) {
  console.log(store.getState())
  function Page(){
    if(store.getState().NavReducer == "Login"){
      return(
        <div>
          <Login store={store} />
        </div>
      );
    }
    if(store.getState().NavReducer == "Registration"){
      return(
        <div>
          <Registration />
        </div>
      );
    }
    if(store.getState().NavReducer == "Bids"){
      return(
        <div>
          <Bids />
        </div>
      )
    }
    if(store.getState().NavReducer == "Purchase"){
      return(
        <div>
          <h1>No Posts YET</h1>
        </div>
      )
    }
    if(store.getState().NavReducer == "About"){
      return(
        <div>
          <About />
        </div>
      )
    }
  }
  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"70px", height:"70px" }} />
          <p>BidZone</p>
        </div>

        <div className="App-body">
              <Container>
                <Navigation store={store} />
                <Page />
              </Container>
        </div>
      
    </div>
  );
}

export default App;