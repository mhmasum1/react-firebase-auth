// import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { use } from 'react';
import { Link } from 'react-router';
// import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    // const userInfo = use(AuthContext)
    // console.log(userInfo);

    const { createUser } = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             console.log(result);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });


    // }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} >
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p>If you are already register. Please <Link className='text-blue-500 hover:text-blue-800' to='/login'>Log in</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;