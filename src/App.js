import logo from './logo.svg';
import './App.css';

import Navigation from './component/Navigation';
import Players from './Players';
import Footer from './component/Footer';
import PlayersDemo from './component/PlayersDemo';
import Main from './component/Main';
import FuncState from './component/FuncState';
import DemoUseState from './component/DemoUseState';
import ContextExample from './component/ContextExample';



function App() {
  return (
    <div className="App">


<Navigation/>

      {/* <Navigation/> */}
      <DemoUseState/>
      {/* <ClassState/> */}
      {/* <hr/> */}
      {/* <FuncState/> */}
      {/* <Navigation/> */}
      {/* <Players/> */}
      {/* <PlayersDemo/> */}
      {/* <Main/> */}

      {/* <Footer/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
