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
        <Routes>
          <Route path="/login" element={
            <h1> Login page</h1>
          }>
          </Route>
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          }>

          </Route>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
