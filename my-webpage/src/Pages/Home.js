import React from "react"
import '../App.css';
import logo from '../logo.svg';
import Mybackground from '../components/Mybackground.jsx';
import Carousel, { CarouselItem } from '../components/Carousel.js';
import UnityChessAppImage from '../assets/ChessTrackerIcon.png';

function HomePage() {
    return(
        <div className="App">
            
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
       
        </div>
    );

    
}

export default HomePage