import './App.css';
import React from 'react';
import SingleMovie from './SingleMovie';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Error from './Error';
import './App.css'
import Login from './Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
