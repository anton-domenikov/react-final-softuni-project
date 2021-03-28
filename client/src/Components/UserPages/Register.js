import {Component} from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(e.target.username);
        console.log(e.target.username.value);
        console.log(e.target.username.name);
        console.log(e.target.username.id);
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
                <form action="">
                    <input type="text"/>
                </form>
    
                <form onSubmit={this.onSubmitHandler} >
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.onChangeHandler} 
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        // value={this.state.age}
                        // onChange={this.onChangeHandler}
                    />
                    <input type="submit" value="Send"/>
                    <button>Click Me!</button>
                </form>
            </div>
        );
    }
}


export default Register;