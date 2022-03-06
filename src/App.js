import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './store/Actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE User is =====>', authUser);

      if (authUser) {
        dispatch(setUser(authUser));
      }
      else {
        dispatch(setUser(null));
      }
    });
  }, []);

  // BEM naming convention
  return (
    <Router>
      <div className="app" data-theme={'light'}>
        <Routes>
          <Route path="/login" element={
            <Login />
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
