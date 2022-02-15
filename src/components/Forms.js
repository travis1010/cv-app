import React from "react";
import '../styles/Forms.css'
import GeneralForm from "./GeneralForm";

class Forms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forms-section">
        <GeneralForm general={this.props} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default Forms;