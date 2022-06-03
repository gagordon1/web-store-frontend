import './App.css';
import Navbar from './components/Navbar';
import ReactBreakpoints from 'react-breakpoints';
import { breakpoints } from './style/Theme';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import StorePage from './pages/Store/StorePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/" element={<StorePage/>}/>
          </Routes>

        </Router>

      </div>
    </ReactBreakpoints>
  );
}

export default App;
