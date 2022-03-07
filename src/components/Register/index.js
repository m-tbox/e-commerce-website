import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo-black.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { auth, db, set, ref } from '../../firebase';
import InputField from '../InputField';


function Register() {
    const signInButtonStyle = {
        width: '100%'
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onClickSignIn = (e) => {
        e.preventDefault();

        navigate('/login');
    }

    const onClickRegister = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {

                if (auth) {
                    let uid = auth?.user?.uid;

                    console.log(uid, 'UID')

                    // db.collection('users').doc(uid)
                    //     .set({
                    //         user_uid: uid,
                    //         name: 'Nande',
                    //         gender: 'f',
                    //     })

                    set(ref(db, 'users/' + uid), {
                        name: 'OName wa',
                        title: 'Sensei',
                        job: 'angry'
                    });

                    // db.doc(`/users/${uid}`)
                    //     .set({
                    //         user_uid: uid,
                    //         name: 'Nande',
                    //         gender: 'f',
                    //     }).then(res => console.log('WHYYYYYYYYY', res)).catch(err => console.log('NOOoooooooo', err))

                    // addDoc(collection(db, "users"), {
                    //     uid: uid,
                    //     name: 'Nande',
                    //     authProvider: "local",
                    // });


                    // navigate('/');
                }
            })
            .catch(error => console.log(error));
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
                <h1> Sign In </h1>

                <form>
                    <InputField
                        title={'Name'}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <InputField
                        title={'Email'}
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <InputField
                        title={'Password'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <InputField
                        title={'Confirm Password'}
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        title={'Register'}
                        onClick={onClickRegister}
                        style={signInButtonStyle}
                    />
                </form>

                <p>
                    Already have account ?
                    <span onClick={onClickSignIn} className="register__signinLink">
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register