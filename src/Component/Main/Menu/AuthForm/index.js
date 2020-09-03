import React from 'react'

function AuthForm() {
    return (
        <div className="auth">
            <input type="text" className="auth-input"></input>
            <input type="password" className="auth-input"></input>
            <div className="auth-button">Sing in</div>
            <div className="auth-button">Sing up</div>
        </div>
    )
}

export default AuthForm