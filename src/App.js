import './App.css';
import Navbar from './components/Navbar';
import ReactBreakpoints from 'react-breakpoints';
import { breakpoints } from './style/Theme'


function App() {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <div className="App">
        <Navbar/>
      </div>
    </ReactBreakpoints>
  );
}

export default App;
