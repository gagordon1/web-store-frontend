import './App.css';
import Navbar from './components/Navbar';
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
  );
}

export default App;
