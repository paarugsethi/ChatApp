import { useState } from "react";
import axios from "axios";

export function LoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "ca9c532c-238b-4805-918f-e13997dcd61f", "User-Name": username, "User-Secret": password}

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject})
            
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        }
        catch (error){
            setError("Invalid Credentials")
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} className="input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" value={password} className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )

}