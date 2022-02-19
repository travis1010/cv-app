import React from "react";
import '../styles/ExperienceForm.css'


class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    const expArr = this.props.experience;
    return (
      <div>
        <h2>Experience <button className="add-btn" onClick={this.props.addExpForm}>Add</button></h2>

        {expArr.map((expItem, index) => (
          <form className="education-form" key={expItem.id}>
            <div className="form-item">
              <label htmlFor="title">Job Title</label>
              <input id="title" type="text" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="yearStart">Year Started</label>
              <input id="yearStart" type="number" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="form-item">
              <label htmlFor="yearEnd">Year Ended</label>
              <input id="yearEnd" type="number" onChange={this.props.onChange} data-index={index}/>
            </div>
            <div className="about form-item">
              <label htmlFor="description">Job Description</label>
              <textarea id="description" onChange={this.props.onChange} data-index={index} rows='7' />
            </div>
            <button type="button" onClick={this.props.deleteExpForm} data-index={index}>Delete</button>
          </form>
        ))}

        
      </div>
    );
  }
}

export default ExperienceForm;