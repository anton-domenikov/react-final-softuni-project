import { Component } from 'react';
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const registered = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log('registered', registered);

        fetch('http://localhost:4040/auth/register',
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(registered)
            })
            .then(res => console.log(res.data))
    }

    // onUsernameChangeHandler(e) {
    //     console.log(e.target.value);
    //     this.setState({username: e.target.value});
    // }

    // onAgeChangeHandler(e) {
    //     this.setState({age: e.target.value});
    // }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <section id="register">
                <div className="register-form">
                    <h1>Register</h1>

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
                        <input type="submit" value="Send" />
                        <button>Click Me!</button>
                    </form>
                </div>
            </section>
        );
    }
}


export default Register;