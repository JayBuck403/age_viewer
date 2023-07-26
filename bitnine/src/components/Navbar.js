import '../styles/Navbar.css';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div className="logo"></div>
            <div className="nav-links">
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
                        <button>
                            Try Free
                        </button>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;