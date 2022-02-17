import React from "react";
import '../styles/EducationForm.css'


class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    const eduArr = this.props.education;
    return (
      <div>
        <h2>Education <button onClick={this.props.addEduForm}>Add</button></h2>

        {eduArr.map((edItem, index) => (
          <form className="education-form" key={edItem.id}>
            <div className="form-item">
              <label htmlFor="degree">Degree/Major/Certificate</label>
              <input id="degree" type="text" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="school">School</label>
              <input id="school" type="text" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="yearStart">Year Started</label>
              <input id="yearStart" type="number" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="yearEnd">Year Ended</label>
              <input id="yearEnd" type="number" onChange={this.props.onChange} data-index={index}/>
            </div>
            <button type="button" onClick={this.props.deleteEduForm} data-index={index}>Delete</button>
          </form>
        ))}

        
      </div>
    );
  }
}

export default EducationForm;