// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    LastName: '',
    firstError: false,
    lastError: false,
    render: false,
  }

  onChangeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecond = event => {
    this.setState({LastName: event.target.value})
  }

  submitFormButton = event => {
    event.preventDefault()
    const isValidFirstName = this.validFirstName()
    const isValidLastNAme = this.validLastName()
    if (isValidFirstName && isValidLastNAme) {
      this.setState({render: true})
    } else {
      this.setState({
        firstError: !isValidFirstName,
        lastError: !isValidLastNAme,
        render: false,
      })
    }
  }

  onBlurFirst = () => {
    const isValidFirst = this.validFirstName()
    this.setState({firstError: !isValidFirst})
  }

  onBlurLast = () => {
    const isValidLastName = this.validLastName()

    this.setState({lastError: isValidLastName})
  }

  validFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validLastName = () => {
    const {LastName} = this.state

    return LastName !== ''
  }

  onClickAnother = () => {
    this.setState({
      firstError: false,
      lastError: false,
      render: false,
    })
  }

  inputForm = () => {
    const {firstName, LastName, firstError, lastError} = this.state

    const firstErr = firstError ? 'input2' : 'input'
    const secondErr = lastError ? 'input2' : 'input'

    return (
      <form className="card" onSubmit={this.submitFormButton}>
        <label htmlFor="first">FIRST NAME</label>
        <input
          onChange={this.onChangeFirst}
          className={firstErr}
          onBlur={this.onBlurFirst}
          value={firstName}
          placeholder="First Name"
          id="first"
          type="text"
        />
        {firstError && <p className="error">Required</p>}
        <br />
        <label htmlFor="second">LAST NAME</label>
        <input
          placeholder="Last Name"
          onChange={this.onChangeSecond}
          value={LastName}
          onBlur={this.onBlurLast}
          className={secondErr}
          id="second"
          type="text"
        />
        {lastError && <p className="error">Required</p>}
        <br />
        <button className="another-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  submitForm = () => (
    <form className="card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
        className="png"
      />
      <p>Submitted Successfully</p>
      <button
        className="another-btn"
        onClick={this.onClickAnother}
        type="submit"
      >
        Submit Another Response
      </button>
    </form>
  )

  render() {
    const {render} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {render ? this.submitForm() : this.inputForm()}
      </div>
    )
  }
}

export default RegistrationForm
