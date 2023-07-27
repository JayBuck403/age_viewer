import '../styles/DBEngine.css';

const DBEngine = () => {
    return ( 
        <div className="db-engine">
            <h1>AgensSQL DB Engine</h1>
            <h3><u>Enhanced Data Security</u></h3>
            <p>
                AgensSQL is a PostgreSQL-based DBMS<br/>
                that guarantees optimal security and stability.
            </p>
            <div className="box-container">
                <div className="db-engine-box">
                    <div className="child-box">
                        Password Profile
                    </div>
                    <div className="hover-text">
                        <ul>
                            <li>user password policy reinforces login security</li>
                            <li>excessive failed login attempts lock an account</li>
                            <li>define rules for password complexity</li>
                        </ul>
                    </div>
                </div>
                <div className="db-engine-box">
                    <div className="child-box">
                        Data Redaction
                    </div>
                    <div className="hover-text">
                        <ul>
                            <li>enhanced data security of user personal information</li>
                            <li>resolve privacy issues in preparation for security audits</li>
                            <li>encryption or masking with unidentifiable special characters</li>
                        </ul>
                    </div>
                </div>
                <div className="db-engine-box">
                    <div className="child-box">
                        Auditing
                    </div>
                    <div className="hover-text">
                        <ul>
                            <li>monitors database activities and collects data</li>
                            <li>traces object accessed or DDL & DML statements executed by a user</li>
                            <li>records all actions in logs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DBEngine;