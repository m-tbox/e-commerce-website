import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo-black.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { auth } from '../../firebase';
import InputField from '../InputField';
import { getErrorMsg, hasError, isEmailInValid } from '../../helpers';

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
    const [errors, setErrors] = useState([]);

    const validateInput = () => {
        let tempError = [];
        let isValid = true;

        if (!email) {
            tempError.push({ email: 'Email is mandatory' });
            isValid = false;
        }
        if (isEmailInValid(email)) {
            tempError.push({ email: 'Please enter valid email' })
            isValid = false;
        }
        if (!password) {
            tempError.push({ password: 'Password is mandatory' });
            isValid = false;
        }
        
        setErrors(tempError);

        return isValid;

    }

    const onClickSignIn = (e) => {
        e.preventDefault();

        const inputValid = validateInput();
        if (inputValid) {
            auth.signInWithEmailAndPassword(email, password)
                .then(auth => {
                    navigate('/');
                })
                .catch(error => alert(error.message));
        }
    }

    const onClickRegister = (e) => {
        e.preventDefault();

        navigate('/register');
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
                    <InputField
                        title={'Email'}
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={hasError('email', errors)}
                        errorMsg={getErrorMsg('email', errors)}
                    />

                    <InputField
                        title={'Password'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={hasError('password', errors)}
                        errorMsg={getErrorMsg('password', errors)}
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