import React from 'react';

function UnsuccessfulLoginPage(props) {
    return (
        <div>
            <h2>Login unsuccessful. Please try again.</h2>
            <button onClick={props.onTryAgain}>Try Again</button>
        </div>
    );
}

export default UnsuccessfulLoginPage;
