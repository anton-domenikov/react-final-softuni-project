import './App.css';
import { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from './Components/UserPages/UserContext';
import { Register, Login } from './Components/UserPages';
import { Header } from './Components/Common';
import { Dashboard, Create, MyBikes, MotorcycleDetails } from './Components/MotorcyclePages';

function App() {
    const [user, setUser] = useState(null);

    const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);    

    return (
        <div className="App">
            <UserContext.Provider value={providerValue}>
                <Header></Header>

                <Switch>
                    <Route path="/" exact component={Dashboard} ></Route>
                    <Route path="/register" component={Register} ></Route>
                    <Route path="/login" component={Login} ></Route>
                    <Route path="/motorcycles/create" component={Create} ></Route>
                    <Route path="/motorcycles/my-bikes" component={MyBikes} ></Route>
                    <Route path="/motorcycles/details:bikeId" component={MotorcycleDetails} ></Route>
                </Switch>
            </UserContext.Provider>
        </div>
    );
}

export default App;
