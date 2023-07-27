import "../styles/Footer.css";
import { DiGithubBadge } from "react-icons/di";
import { BiLogoYoutube, BiLogoLinkedin, BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillMediumSquare } from "react-icons/ai";

const Footer = () => {

    const year = new Date().getFullYear();
   

    return (
        <div className="footer">
	    <div className="footer-box-1">
		<div className="footer-boxes">
		    <h3>PRODUCTS</h3>
	    	    <p>Relational Database</p>
	    	    <p>Graph Database</p>
	            <p>Graph-based Solutions</p>
	    	</div>
	    	<div className="footer-boxes">
	    	    <h3>USE CASES</h3>
	        </div>
	    	<div className="footer-boxes">
	            <h3>SERVICES</h3>
	        </div>
	    	<div className="footer-boxes">
	            <h3>RESOURCES</h3>
	            <p>Resources</p>
	    	    <p>Learn</p>
	        </div>
	    	<div className="footer-boxes">
	            <h3>BLOG</h3>
	        </div>
	    	<div className="footer-boxes">
	            <h3>COMPANY</h3>
	    	    <p>About Us</p>
	    	    <p>Contact</p>
	        </div>
	    </div>
	    <div className="copyright-box">
	        <h4>&#169;{year} by Bitnine Global Inc. All Rights Reserved.</h4>
	        <div className="footer-logos">
	    	    <h2><DiGithubBadge /></h2>
	    	    <h2><BiLogoYoutube /></h2>
	    	    <h2><BiLogoLinkedin /></h2>
	    	    <h2><BiLogoFacebookCircle /></h2>
	    	    <h2><AiFillMediumSquare /></h2>
	    	    <p className="footer-contact">CONTACT</p>
	        </div>
	    </div>
	</div>
    )
}


export default Footer;
