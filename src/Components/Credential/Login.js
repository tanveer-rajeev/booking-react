
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { logInWithCredentials, signUPWithCredentials } from './CredentialController';
import "./login.css"
const Login = () => {

    const [credential, setCredential] = useState({
        username: '',
        password: ''
    });

    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [error,setError] = useState('');
    const history = useHistory();

    const handleResponse = (res, redirect) => {
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
            signUPWithCredentials(username, password)
                .then((response) => {
                    handleResponse(response, false);
                }).catch(err=>{
                    setError(err);
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

        <div id="accountDiv" className=" container p-5">

            <form onSubmit={handleSubmit}>
                            {
                                newUser && <h1>Create Account</h1>
                            }
                            {
                                !newUser && <h1>Log In </h1>
                            }
                <div className="input-group">
                    <label htmlFor="">Username</label>
                    <input id="signUp-username" onChange={handleChange} className="inp-style" type="text" name="" placeholder="username"/>
                </div>

                <div className="input-group">
                    <label htmlFor="">Password</label>
                    <input id="signUp-password" onChange={handleChange} className="inp-style" type="password" name="" placeholder="password"/>
                </div>

                <br/>
                <input className="btn-style" type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
               
            </form>
            <p>{error}</p>
            <br />
                 <h5> Don't have an account?</h5>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">Create Account</label>
            <br />
        </div>
    );
};

export default Login;