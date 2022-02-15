import React from "react";
import '../styles/Preview.css'

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview-section">
        <div className="general-info">
          {this.props.general.firstName}&nbsp;{this.props.general.lastName}
          {this.props.general.email}
          {this.props.general.phone}
        </div>
      </div>
    )
  }
}

export default Preview;