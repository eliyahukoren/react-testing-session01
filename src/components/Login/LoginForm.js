import PropTypes from "prop-types"
import React from "react"
import './loginform.css'

function LoginForm({ onSubmitLoginForm, handleForm }) {
    // console.log(onSubmitLoginForm,handleForm)
    const loginTitle = process.env.REACT_APP_LOGIN_USERNAME_LABEL
    return (
        <React.Fragment>
            <div className="login-container"></div>
            <div className="login-form">
                <form data-testid="login-form" onSubmit={e => onSubmitLoginForm(e)}>
                    <div className="mb-3">
                        <h3 className="login-form__header">{loginTitle}</h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="checkMe" />
                        <label className="form-check-label" htmlFor="checkMe">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>



        </React.Fragment>
    )
}

LoginForm.propTypes = {
    onSubmitLoginForm: PropTypes.func.isRequired
}

export default LoginForm