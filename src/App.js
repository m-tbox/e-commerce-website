import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  // BEM naming convention
  return (
    <Router>
      <div className="app" data-theme={'light'}>
        <Header />

        <Routes>
          <Route path="/checkout" element={
            <Checkout />
          } >

          </Route>
          <Route path="/" element={
            <Home />
          } >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
