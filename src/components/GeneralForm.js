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
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={this.props.onChange} />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="text" onChange={this.props.onChange} />
      </form>
    )
  }
}

export default GeneralForm;