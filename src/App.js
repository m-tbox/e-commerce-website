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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        let uid = authUser?.uid;

        const userDetails = ref(db, `users/${uid}`);
        onValue(userDetails, (snapshot) => {
          let data = snapshot.val();
          data = {...authUser, ...data};

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
