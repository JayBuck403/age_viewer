import HomeButtons from "./HomeButtons";
import '../styles/HomeBanner.css';

const HomeBanner = () => {
    return ( 
        <div className="home-banner">
            <div className="title-image"></div>
            <h3>An integration of Bitnine’s DB technology and PG expertise</h3>
            <p>AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise <br/>
                and knowledge accumulated through database research and development.
            </p>
            <p>
                The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures <br/>
                the efficiency and scalability of data management.
            </p>
            <p>
                Get AgensSQL now for stable operation and management services at a reduced <br/>
                maintenance cost.
            </p>
            <div className="home-buttons">
                <HomeButtons name="Contact"/>
                <HomeButtons name="Brochure"/>
                <HomeButtons name="Blog"/>
            </div>
        </div>
     );
}
 
export default HomeBanner;
