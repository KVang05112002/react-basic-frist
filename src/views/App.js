import logo from './logo.svg';
import './App.scss';
import MyComponent from './exmaple/MyComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello everyone, My name is Vang This is my frist React app
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
