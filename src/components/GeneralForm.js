import React from "react";
import '../styles/GeneralForm.css'

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="general-form">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" onChange={this.props.onChange} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" onChange={this.props.onChange} />
        <label htmlFor="profession">Profession</label>
        <input id="profession" type="text" onChange={this.props.onChange} />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={this.props.onChange} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" onChange={this.props.onChange} />
        <label htmlFor="website">Website</label>
        <input id="website" type="text" onChange={this.props.onChange} />
        <label htmlFor="about">About</label>
        <textarea id="about" onChange={this.props.onChange} rows='6' />
      </form>
    )
  }
}

export default GeneralForm;