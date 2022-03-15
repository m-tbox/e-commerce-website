import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth, ref, db, onValue } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './store/Actions';
import Register from './components/Register';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Kd8pMJCaAUH1ZyDYnUwHhbtLAIA13x3LXAZmbCqjyZE7kThuEPk6jdQ9hrCSWSmKml9IB8cFUF2Z1Chn5pQsMF200SSUb5Cew');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        let uid = authUser?.uid;

        const userDetails = ref(db, `users/${uid}`);
        onValue(userDetails, (snapshot) => {
          let data = snapshot.val();
          data = { ...authUser, ...data };

          console.log('DAtata', data);

          dispatch(setUser(data));

        });

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
          <Route path="/register" element={
            <Register />
          }>
          </Route>
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

          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise} >
                <Payment />
              </Elements>
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
