import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo-black.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { auth } from '../../firebase';

function Login() {
    const signInButtonStyle = {
        width: '100%'
    }

    const registerButtonStyle = {
        backgroundColor: 'lightgray',
        color: 'black',
        border: '1px solid gray'
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    const onClickRegister = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {

                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1> Sign In </h1>

                <form>
                    <h5> Email </h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5> Password </h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                    />

                    <Button
                        type="submit"
                        title={'Sign In'}
                        onClick={onClickSignIn}
                        style={signInButtonStyle}
                    />
                </form>

                <p>
                    By signing-in you agree to the Shopping Fine Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Button
                    title={'Create your Account'}
                    onClick={onClickRegister}
                    style={registerButtonStyle}
                />
            </div>
        </div>
    )
}

export default Login