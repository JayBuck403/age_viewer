import { useState } from "react";
import "../styles/SignUp.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {

    }

    return (
        <div className="form-container">
            <div className="form-image"></div>
            <h2>Login</h2>
            <form action="/login" method="POST" onSubmit={handleSubmit}>
                <div>
                    <input className="email-box" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <input className="password-box" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>  
    )
}

export default Login;
