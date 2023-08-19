import React, { useState } from 'react';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // For demonstration purposes, let's use "admin" as the hardcoded username and "password123" as the password
        if(username === 'admin' && password === 'password123') {
            props.onSuccess();
        } else {
            props.onFailure();
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default LoginPage;
