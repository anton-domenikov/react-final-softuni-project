import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserPages/UserContext';

import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    
    let history = useHistory();

    const onClickLogout = () => {
        fetch('http://localhost:4040/auth/logout',
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            })
            .then(() => {
                setUser(null);
                history.push('/login')
            })
    }

    if (user) {
        const currentUser = user[0];
        return (
            <>
                <header id="header">
                    <h1>World of Suzuki</h1>
                    <h2>Welcome, <span>{currentUser}</span>!</h2>
                    <nav id="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/motorcycles/create">Add Bike</Link></li>
                            <li><Link to="/motorcycles/my-bikes">My Bikes</Link></li>
                            <li><Link onClick={onClickLogout} to="/logout">Logout, {currentUser}</Link></li>
                        </ul>
                    </nav>
                </header>

            </>
        );
    } else {
        return (
            <>
                <header id="header">
                    <h1>World of Suzuki</h1>

                    <nav id="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </nav>
                </header>

            </>
        );
    }
};

export default Header;