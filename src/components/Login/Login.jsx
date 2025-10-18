import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const userInfo = use(AuthContext)
    console.log(userInfo);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Log In</button>
                            </fieldset>
                            <p>If you are not register. Please <Link className='text-blue-500 hover:text-blue-800' to='/register'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;