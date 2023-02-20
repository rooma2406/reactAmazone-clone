import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
  
    <Router>
    <div className="app">
       <Routes>
        
      <Route path='/checkout'>
        <h1>Checkout</h1>
      </Route>

      <Route path='/login'>
        <h1>Login page</h1>
      </Route>

      <Route path='/' element={<Home/>} />
        
    </Routes>
      
    </div>
  </Router>
  
  );
}

export default App;
