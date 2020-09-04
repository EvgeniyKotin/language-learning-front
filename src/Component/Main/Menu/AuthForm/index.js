import React, {Component} from 'react'

class AuthForm extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            email: '',
            name: '',
            showRegistration: false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickSingInButton = this.onClickSingInButton.bind(this)
        this.onClickSingUpButton = this.onClickSingUpButton.bind(this)
    }

    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClickSingInButton(event) {
        fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((res) => {
            if(res.err) {
                console.log(res.err)
            } else {
                console.log(res.message)
            }
        })
    }

    onClickSingUpButton(event) {
        if(!this.state.showRegistration) {
            this.setState({
                showRegistration: true
            })
        } else {
            fetch('/auth/singup', {
                method: 'POST',
                body: JSON.stringify({
                    login: this.state.login,
                    password: this.state.password,
                    email: this.state.email,
                    name: this.state.name
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((res) => {
                if(res.err) {
                    console.log(res.err)
                } else {
                    console.log(res.message)
                }
            })
        }
        
    }

    render() {
        return (
            <div className="auth">
                <input 
                    type="text" 
                    name="login"
                    placeholder="Enter login"
                    onChange={this.onChangeHandler}
                    className="auth-input" />
                {
                    this.state.showRegistration && <input 
                    type="text" 
                    name="name"
                    placeholder="Enter name"
                    onChange={this.onChangeHandler}
                    className="auth-input"></input> 
                }
                {
                    this.state.showRegistration && <input 
                    type="text" 
                    name="email"
                    placeholder="Enter email"
                    onChange={this.onChangeHandler}
                    className="auth-input"></input> 
                }
                

                <input 
                    type="password" 
                    name="password"
                    placeholder="Enter password"
                    onChange={this.onChangeHandler}
                    className="auth-input"></input>                
                {
                    !this.state.showRegistration && <button 
                        className="auth-button"
                        onClick={this.onClickSingInButton}
                        >Log in</button>
                }
                <button 
                    className="auth-button"
                    onClick={this.onClickSingUpButton}
                    >Sing up</button>
            </div>
        )
    }
    
}

export default AuthForm