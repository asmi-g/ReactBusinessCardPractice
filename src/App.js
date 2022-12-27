import logo from './logo.svg';
import './App.css';
import HeaderPicture from "./components/HeaderPicture"
import MainBody from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPicture/>
        <MainBody/>
      </header>
    </div>
  );
}

export default App;
