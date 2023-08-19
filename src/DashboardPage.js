import React from 'react';

function DashboardPage(props) {
    return (
        <div>
            <h2>Welcome, admin!</h2>
            <button onClick={props.onLogout}>Logout</button>
        </div>
    );
}

export default DashboardPage;
