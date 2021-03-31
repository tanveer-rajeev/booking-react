
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { logInWithCredentials, singUPWithCredentials } from './CredentialController';

const Login = () => {

    const [credential, setCredential] = useState({
        username: '',
        password: ''
    });

    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const handleResponse = (res, redirect) => {
        console.log(res);
        if (redirect) {
            setLoggedInUser(res);
            history.push(`booking`);
        } else {
            setNewUser(redirect);
        }
    }



    const handleChange = (event) => {
        const userInfo = { ...credential };
        if (event.target.type === 'text') {
            userInfo.username = event.target.value;
            console.log(userInfo.username);
            setCredential(userInfo);
        }
        if (event.target.type === 'password') {
            const user = { ...credential };
            user.password = event.target.value;
            setCredential(user);
        }
    }

    const handleSubmit = (e) => {
        const { username, password } = credential;
        e.preventDefault();
        if (newUser) {
            console.log("Create account");
            singUPWithCredentials(username, password)
                .then((response) => {
                    handleResponse(response, false);
                })
        }
        else if (username && password) {
            logInWithCredentials(username, password)
                .then((response) => {
                    handleResponse(response, true);
                })
        }

    }

    return (
        <div className="login container justify-content-center ">

            <form onSubmit={handleSubmit}>
                {
                    newUser && <h1>Create Account</h1>
                }
                {
                    !newUser && <h1>Log In </h1>
                }
                <input type="text" onChange={handleChange} placeholder="Enter your username" value={credential.username} required />
                <br />
                <input type="password" onChange={handleChange} placeholder="Enter your password" value={credential.password} required />
                <br />
                <input className="submitButton" type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
            </form>
            <br />
            <h5> Don't have an account?</h5>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">Create Account</label> <br />
        </div>
    );
};

export default Login;