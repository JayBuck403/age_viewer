import AgensPackage from "./AgensPackage";
import DBEngine from "./DBEngine";
import HomeBanner from "./HomeBanner";
import KeyFeatures from "./KeyFeatures";
import AgensEntPackage from "./AgensEntPackage";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Hompage = () => {
    return ( 
        <div>
            <Navbar />
            <HomeBanner />
            <AgensPackage />
            <KeyFeatures />
            <DBEngine />
	    <AgensEntPackage />
	    <Footer />
        </div>
     );
}
 
export default Hompage;
