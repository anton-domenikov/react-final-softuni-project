import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
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
    }

    return (
        <>
            <header id="header">
                <h1>Suzuki</h1>
                <h2>Welcome <span>profile!</span>!</h2>
                <nav id="nav">
                    <ul>
                        <li><Link onClick={onClickLogout} to="/logout">Logout</Link></li>
                    </ul>
                </nav>
                <nav id="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/motorcycles/create">Add Bike</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    );
};

export default Header;