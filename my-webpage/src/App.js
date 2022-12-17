import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebarl">
        Fuck You
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          className='Text-color'
        >
          testpage
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
      <div className="sidebarr">
        Tristan
      </div>

    </div>
  );
}

export default App;
