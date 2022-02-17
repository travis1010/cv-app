import React from "react";
import '../styles/Forms.css'
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className="forms-section">
        <GeneralForm general={this.props.props} onChange={this.props.onChange} />
        <EducationForm education={this.props.props.education} onChange={this.props.onChangeEdu} addEduForm={this.props.addEduForm} deleteEduForm={this.props.deleteEduForm} />
        <SkillsForm skills={this.props.props.skills} addSkill={this.props.addSkill} deleteSkill={this.props.deleteSkill}/>
      </div>
    )
  }
}

export default Forms;