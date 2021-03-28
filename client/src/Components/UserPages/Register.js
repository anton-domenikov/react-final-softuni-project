import {Component} from 'react';

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
        console.log(e.target.username);
        console.log(e.target.username.value);
        console.log(e.target.username.name);
        console.log(e.target.username.id);

        console.log(this.state);

        const registered = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log(registered);

        fetch(
            'http://localhost:4040/auth/register', 
            {
                method: 'post',
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
        this.setState({[e.target.name]: e.target.value});
    }

    render () {
        return (
            <div>
                <h1>Demo Form baby</h1>
    
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
                    <input type="submit" value="Send"/>
                    <button>Click Me!</button>
                </form>
            </div>
        );
    }
}


export default Register;