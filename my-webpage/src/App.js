import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <b href="#home">
          <img id = "container" src={logo} className="App-logo" alt="logo" />
        </b>
        <a href="#a">Fuck</a>
        <a href="#b">You</a>
        <a href="#c">Jeffrey</a>
        <a href="#d">Gao</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
