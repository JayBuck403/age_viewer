import '../styles/Navbar.css';
import HomeButtons from "./HomeButtons";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

	const location = useLocation();

    return ( 
        <div className="nav-container">
            <div className="logo"></div>
            <div className="nav-links">
                <div className="top-nav">
	    	    <p>You are logged in as {location.state.id}</p>
                    <Link to="/"><HomeButtons name="Sign up" /></Link>
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
