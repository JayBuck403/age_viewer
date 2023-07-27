import "../styles/AgensEntPackage.css";

const AgensEntPackage = () => {
    return (
        <div className="enterprise-package-section">
            <h1>Agens Enterprise Package</h1>
	    <p>
	        Agens Enterprise Package comes with a high availability management server that<br/>
                supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.
	    </p>
	    <div className="package-titles">
	        <div>
                    <h2>Agens HA Manager</h2>
	    	    <h3>HA Clustering – Failover/Failback, Load-balancing</h3>
                </div>
	        <div>
	            <h2 className="aem">Agens Enterprise Manager</h2>
	        </div>
	    </div>
	    <div className="ent-image-container">
	    <div className="ent-image"></div>
	    <div className="aem-boxes-container">
	    <div className="aem-boxes">
                Backup/Restore
	    </div>
	    <div className="aem-boxes">
                DB Monitoring Dashboard
            </div>
	    <div className="aem-boxes">
                Schedule Management
            </div>
            <div className="aem-boxes">
                Database Audit
            </div>
            <div className="aem-boxes">
                SQL Monitoring
            </div>
            <div className="aem-boxes">
                Performance Management
            </div>
	    </div>
	    </div>
	</div>
    )
}


export default AgensEntPackage;
