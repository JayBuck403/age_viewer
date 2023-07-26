import '../styles/AgensPackage.css';

const AgensPackage = () => {
    return ( 
        <div>
            <div className="agens-package">
                <h2 className="package-title">Agens Enterprise Package</h2>
                <div className="enterprise-box">
                    <div className="usability">
                        <h4>AEM [Agens Enterprise Manager]</h4>
                        <p>DB Operation/Management</p>
                        <p>Monitoring Dashboard</p>
                        <p>SQL Edit/Execute/Inquiry</p>
                        <p>HA & Extension Management</p>
                    </div>
                    {/* <p className="usability-funtion">Usability</p> */}
                    <div className="scalability">
                        <h4>Agens SQL Extension Server</h4>
                        <p><strong>AHM</strong><br/>[Agens HA Manager]</p>
                        <p><strong>LoadBalancer</strong><br/>Backup/Restore</p>
                        <p>Data Sharding</p>
                    </div>
                    {/* <p className="usability-funtion">Scalabilty</p> */}
                </div>
                <div className="stability-box">
                    <h2 className="package-title">AgensSQL DB Engine</h2>
                    <div className="stability">
                    <h4>PostgreSQL 12</h4>
                    <p>Data Security</p>
                    </div>
                </div>
                <div className="installation">
                    <p><strong>All-in-one Installation</strong></p>
                </div>
            </div>
        </div>
     );
}
 
export default AgensPackage;