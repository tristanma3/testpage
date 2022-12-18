import logo from './logo.svg';
import './App.css';
import Mybackground from './components/Mybackground.jsx'
import Carousel, { CarouselItem } from './components/Carousel.js'


function App() {
  return (
    <div className="App">
      
      <div id="topnav">
        <b href="#home">
          <img id = "container" src={logo} className="App-logo1" alt="logo" />
        </b>
        <a href="#a">Fuck</a>
        <a href="#b">You</a>
        <a href="#c">Jeffrey</a>
        <a href="#d">Gao</a>
      </div>
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
    </div>
    
  );
}
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

export default App;
