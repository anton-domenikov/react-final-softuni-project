import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header id="header">
                <h1>Suzuki</h1>
                <h2>Welcome <span>profile!</span>!</h2>
                <nav id="nav">
                    <ul>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
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
};

export default Header;