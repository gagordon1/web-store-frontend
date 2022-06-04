import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import StorePage from './pages/Store/StorePage';
import Checkout from './pages/Checkout/Checkout';
import { SectionSeparator }  from './components/SectionSeparator';
import { BottomSection } from './components/BottomSection'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const RouteContainer = styled.div`
  min-height:550px;
  margin-top: 40px;
`

function App() {
  return (
    <div className="App">

        <Router>
          <Navbar/>
          <SectionSeparator/>
          <RouteContainer>
            <Routes>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/" element={<StorePage/>}/>
              <Route path="/product/:id" element={<Checkout/>} />
            </Routes>
          </RouteContainer>
          <BottomSection/>
        </Router>

    </div>
  );
}

export default App;
