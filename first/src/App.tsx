import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Circle } from './components/Circle';
import { Triangle } from './components/Triangle';

function App() {

  

  return (
    <div className="App">
      <Header title={'The best program for calculating the areas of shapes'} />
      <div className={'main'}>
        <Circle />
        <Triangle />
      </div>
    </div>
  );
}

export default App;
