import { useState, useContext } from 'react';
import { UserContext } from '../UserPages/UserContext';
import './Login.css'

const Login = ({history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser } = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const logged = {
            username,
            password
        }

        console.log('Logged', logged);

        fetch('http://localhost:4040/auth/login',
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(logged),
                mode: 'cors',
                credentials: 'include'
            })
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setUser([username, data.userId]);
                history.push('/')
                console.log(data);
            })
    }

    const onUsernameChangeHandler = (e) => {
        const usernameValue = e.target.value;
        setUsername(usernameValue);
    }

    const onPasswordChangeHandler = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        // console.log(password);
    }


    return (
        <section id="login">
            <div className="login-form">
                <h1>Login</h1>

                <form onSubmit={onSubmitHandler} >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onUsernameChangeHandler}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onPasswordChangeHandler}
                    />

                    <button>Submit</button>
                </form>
            </div>
        </section>
    );

}


export default Login;