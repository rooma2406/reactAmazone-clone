import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';


function App() {

  return (

    <Router>
      <div className="app">
        <Routes>

          <Route path='/checkout'>
            {/* <h1>Checkout</h1> */}
          </Route>

          <Route path='/login' />
          {/* <h1>Login page</h1> */}


          <Route path='/' element= {<Header/>}/>
         
        </Routes>

        <Routes>
        <Route path='/' element= {<Home/>}/>
        </Routes>



      </div>
    </Router>

  );
}

export default App;
