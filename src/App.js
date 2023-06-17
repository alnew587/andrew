import opal from './assets/red opal.jpg';
import cowboy from './assets/IMG_3071.jpg';
import us from './assets/IMG_1962.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Pad"></div>
      <header className="App-header">
        <div className="col">
          <img src={cowboy} className="pic" alt="cowboy" />
        </div>

        <div className="col">
        <img src={opal} className="App-logo" alt="opal" />
        <div className="textBack">
          <p>
            happy birthday!
          </p>
        </div>
        </div>

        <div className="col">
          <img src={us} className="pic" alt="us two" />
        </div>

      </header>
    </div>
  );
}

export default App;
