import '../styles/KeyFeatures.css';
import { MdSecurity } from 'react-icons/md';
import { AiOutlineMonitor } from 'react-icons/ai';
import { GrServerCluster } from 'react-icons/gr';
import { TbLoadBalancer } from 'react-icons/tb';



const KeyFeatures = () => {
    return ( 
        <div className="key-features">
            <h1 className="key-features-title">Key Features</h1>
            <p>Manage your data with Agens Enterprise Package<br/>
                Essential enterprise features such as high availability and sharding are provided
            </p>
            <div className="key-features-chart">
                <div className="key-features-row-1">
                    <div className="key-features-func">
                        <h2><span className="icon"><MdSecurity/></span>Data Security</h2>
                        <p>Various security features are added to<br/> 
                            ensure security and stability of data.
                        </p>
                    </div>
                    <div className="key-features-func">
                        <h2><span className="icon"><GrServerCluster/></span>High Availability</h2>
                        <p>In the event of main system failure,<br/> 
                            standby server minimizes downtime<br/>
                            by restoring the system.
                        </p>
                    </div>
                </div>
                <div className="agens-sql-circle">AgensSQL</div>
                <div className="key-features-row-2">
                    <div className="key-features-func">
                    <h2><span className="icon"><AiOutlineMonitor/></span>Monitoring</h2>
                        <p>Monitoring dashboard views, overall<br/> 
                            status of the DB such as query analysis,<br/>
                            operating environment status, database audit, etc.
                        </p>
                    </div>
                    <div className="key-features-func">
                    <h2><span className="icon"><TbLoadBalancer/></span>Data Sharding</h2>
                        <p>Distribute a single dataset across<br/> 
                            multiple databases, increasing the<br/>
                            total capacity of the system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default KeyFeatures;
