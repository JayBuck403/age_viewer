import '../styles/Navbar.css';
import HomeButtons from "./HomeButtons";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div className="logo"></div>
            <div className="nav-links">
                <div className="top-nav">
                    <Link to="/sign_up"><HomeButtons name="Sign up" /></Link>
                    <Link to="/login"><HomeButtons name="Login" /></Link>
                </div>
                <ul>
                    <li>
                        Products
                    </li>
                    <li>
                        Use Cases
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        IR
                    </li>
                    <li>
                        <HomeButtons name="Try Free"/>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
