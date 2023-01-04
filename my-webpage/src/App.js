import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import logo from './logo.svg';
import Mybackground from './components/Mybackground.jsx';
import Carousel, { CarouselItem } from './components/Carousel.js';
import UnityChessAppImage from './assets/ChessTrackerIcon.png';
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import OpeningTheory from './Pages/OpeningTheory';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <div class="topnav">
          <b href="/">
            <img id = "container" src={logo} className="App-logo1" alt="logo" />
          </b>
          <a href="/">Home</a>
          <a href="OpeningTheory">OpeningTheory</a>
          <a href="asdfasdfasdf">placeholder</a>
          <a href="ErrorPage">ErrorPage</a>
        </div>

      </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/OpeningTheory" element={<OpeningTheory/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>


    </BrowserRouter>

    
  );
}

export default App;

/* OLD CODE
            <header className="App-header">
              <Mybackground />
              <div test>
                <img id = "container1" src={logo} className="App-logo" alt="logo" />
              </div>
              <p
                className='Text-color'
              >
                Hi, fuckers
              </p>
              <p
                className='Text-color'
              >
                I'm Kourizon and
              </p>
              <p
                className='Text-color'
              >
                I like kids.
              </p>
              <a
                className="App-link"
                href="https://github.com/tristanma3"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tristanma3
              </a>
              <a
                className="App-link"
                href="https://github.com/JeffreyGao0112"
                target="_blank"
                rel="noopener noreferrer"
              >
                @JeffreyGao0112
              </a>
            </header>

            <Carousel>
                <CarouselItem>Tristan...</CarouselItem>
                <CarouselItem>Is...</CarouselItem>
                <CarouselItem>A...</CarouselItem>
                <CarouselItem>Whore!</CarouselItem>
            </Carousel>

            <div className='App-header-dark'>
              <p>
                Poggers Link test
              </p>
              <a
                href="https://www.digitalhighschool.org/unity/2021/APCSP/Arroyo/project1/project2/index.html"
                target="_blank"
              >
                <img src = {UnityChessAppImage}/>
              </a>
            </div>
*/
