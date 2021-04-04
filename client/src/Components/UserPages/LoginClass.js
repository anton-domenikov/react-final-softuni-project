import { Component, useContext } from 'react';
import { UserContext } from './UserContext';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            user: null,
            setUser: this.setUser,
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    setUser = (user) => {
        this.setState({ user });
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const logged = {
            username: this.state.username,
            password: this.state.password,
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
                console.log(data);
            })
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <section id="login">
                <div className="login-form">
                    <h1>Login</h1>

                    <form onSubmit={this.onSubmitHandler.bind(this)} >
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeHandler}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                        />

                        <button>Submit</button>
                    </form>
                </div>
            </section>
        );
    }
}


export default Login;