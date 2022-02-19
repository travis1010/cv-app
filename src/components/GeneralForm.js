import React from "react";
import '../styles/GeneralForm.css'

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <h2>General Info </h2>
        <form className="general-form" onSubmit={this.props.submitImg}>
          <div className="form-item">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" onChange={this.props.onChange} />
          </div>
          <div className="form-item">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" onChange={this.props.onChange} />
          </div>
          <div className="form-item">
            <label htmlFor="profession">Professional Title</label>
            <input id="profession" type="text" onChange={this.props.onChange} />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={this.props.onChange} />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" onChange={this.props.onChange} />
          </div>
          <div className="form-item">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" onChange={this.props.onChange} />
          </div>
          <div className="about form-item">
            <label htmlFor="about">About Me</label>
            <textarea id="about" onChange={this.props.onChange} rows='7' />
          </div>
          <div className="form-item img-item">
            <label htmlFor="imgsrc">Image URL</label>
            <div className="img-submit">
              <input id="imgsrc" type="text"/>
              <button type="submit" className="img-btn">Submit</button>
            </div>
          </div>
        
        </form>
      </div>
    )
  }
}

export default GeneralForm;