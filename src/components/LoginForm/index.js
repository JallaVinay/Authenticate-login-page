// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isValidUser: true, errMsg: ''}

  onUserNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  authenticate = async () => {
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onAuthenticationSuccess()
    } else {
      this.setState({isValidUser: false, errMsg: data.error_msg})
    }
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const isValidUsername = username !== ''
    const isValidPassword = password !== ''
    if (!isValidPassword && !isValidUsername) {
      this.setState({isValidUser: false})
      return
    }
    await this.authenticate()
    this.setState({username: '', password: ''})
  }

  onAuthenticationSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {username, password, isValidUser, errMsg} = this.state

    return (
      <div className="login-form-container">
        <img
          className="website-login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <img
            className="website-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <div className="input-container">
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              onChange={this.onUserNameChange}
              id="username"
              className="input-element"
              type="text"
              value={username}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              onChange={this.onPasswordChange}
              id="password"
              className="input-element"
              type="password"
              value={password}
              placeholder="Password"
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>

          {isValidUser ? null : (
            // eslint-disable-next-line
            <p className="warning">*{errMsg}</p>
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
