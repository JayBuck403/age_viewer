import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
	e.preventDefault();


        await axios.post("http://localhost:8080/login", {
            email, password
        })
	.then(response => {
         	    if (response.data === "Homepage") {
			navigate("/home", {state: {id: email}});
		 } else {
			alert("User not registered");
		 }
	    });
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
