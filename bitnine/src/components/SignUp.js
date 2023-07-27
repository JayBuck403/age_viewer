import { useState } from "react";
import "../styles/SignUp.css";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
	
	const signUp = {email, password}
	
        const response = await fetch("http://localhost:8080/sign_up", {
            method: "POST",
	    body: JSON.stringify(signUp),
	    headers: {"Content-Type": "application/json"}
	});

	const json = response.json();

	if (!response.ok) {
	    setError(error);
	}

	if (response.ok) {
	    setEmail("");
	    setPassword("");
	    setError(null);
	    console.log("New user added", json);
	}
    }

    return ( 
        <div className="form-container">
            <div className="form-image"></div>
            <h2>Sign Up</h2>
            <form action="/sign_up" method="POST" onSubmit={handleSubmit}>
                <div>
                    <input className="email-box" placeholder="Email"type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <input className="password-box" placeholder="Password"type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Sign Up</button>
	        {error && <div>{error}</div>}
            </form>
        </div>
     );
}
 
export default SignUp;
