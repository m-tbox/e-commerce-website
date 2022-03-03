import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // BEM naming convention
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
            <>
              <Header />
              <h1>
                I am Checkout page
              </h1>
            </>
          } >
            
          </Route>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
