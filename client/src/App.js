import './App.css';
import { Route, Switch } from 'react-router-dom';

import {Register, Login} from './Components/UserPages'
import {Header} from './Components/Common'

function App() {
    return (
        <div className="App">
            <Header></Header>

            <Switch>
                <Route path="/register" component={Register} ></Route>
                <Route path="/login" component={Login} ></Route>
            </Switch>
        </div>
    );
}

export default App;
