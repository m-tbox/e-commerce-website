import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo-black.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { auth, db, set, ref } from '../../firebase';
import InputField from '../InputField';
import { getErrorMsg, hasError, isEmailInValid } from '../../helpers';


function Register() {
    const signInButtonStyle = {
        width: '100%'
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const onClickSignIn = (e) => {
        e.preventDefault();

        navigate('/login');
    }

    const validateInput = () => {
        let tempError = [];
        let isValid = true;
        let password1DigitRegex = /\d/;
        let password1LowerCaseRegex = /[a-z]/;
        let password1UpperCaseRegex = /[A-Z]/;
        let password1SpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (!name) {
            tempError.push({ name: 'Name is mandatory' });
            isValid = false;
        }
        if (!email) {
            tempError.push({ email: 'Email is mandatory' });
            isValid = false;
        }
        if (isEmailInValid(email)) {
            tempError.push({ email: 'Please enter valid email' })

        }
        if (!password) {
            tempError.push({ password: 'Password is mandatory' });
            isValid = false;
        }
        if (password.trim().length < 8) {
            tempError.push({ password: 'Minimum length should be 8 characters' });
            isValid = false;
        }

        //NOTE: password complexity test
        if (!password1DigitRegex.test(password)) {
            tempError.push({ password: 'Password should have atleast 1 digit' });
            isValid = false;
        }
        if (!password1LowerCaseRegex.test(password)) {
            tempError.push({ password: 'Password should have atleast 1 lower case character' });
            isValid = false;
        }
        if (!password1UpperCaseRegex.test(password)) {
            tempError.push({ password: 'Password should have atleast 1 upper case caharacter' });
            isValid = false;
        }
        if (!password1SpecialCharRegex.test(password)) {
            tempError.push({ password: 'Password should have atleast 1 special character' });
            isValid = false;
        }

        if (password !== confirmPassword) {
            tempError.push({ password: 'Passwords do not match' });
            isValid = false;
        }

        setErrors(tempError);

        return isValid;
    }

    const onClickRegister = (e) => {
        e.preventDefault();

        const inputValid = validateInput();

        if (inputValid) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(auth => {

                    if (auth) {
                        let uid = auth?.user?.uid;

                        set(ref(db, 'users/' + uid), {
                            name,
                        });

                        navigate('/');
                    }
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="register">
            <Link to="/">
                <img
                    className="register__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div className="register__container">
                <h1> Register </h1>

                <form>
                    <InputField
                        title={'Name'}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        error={hasError('name', errors)}
                        errorMsg={getErrorMsg('name', errors)}
                    />

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

                    <InputField
                        title={'Confirm Password'}
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        error={hasError('confirmPassword', errors)}
                        errorMsg={getErrorMsg('confirmPassword', errors)}
                    />

                    <Button
                        type="submit"
                        title={'Register'}
                        onClick={onClickRegister}
                        style={signInButtonStyle}
                    />
                </form>

                <p>
                    Already have account ? {' '}
                    <span onClick={onClickSignIn} className="register__signinLink">
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register