import React from "react";
import '../styles/Forms.css'
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className="forms-section">
        <div>
          <GeneralForm general={this.props.props} onChange={this.props.onChange} submitImg={this.props.submitImg}/>
          <EducationForm education={this.props.props.education} onChange={this.props.onChangeEdu} addEduForm={this.props.addEduForm} deleteEduForm={this.props.deleteEduForm} />
        </div>
        
        <div>
          <SkillsForm skills={this.props.props.skills} addSkill={this.props.addSkill} deleteSkill={this.props.deleteSkill}/>
          <ExperienceForm experience={this.props.props.experience} onChange={this.props.onChangeExp} addExpForm={this.props.addExpForm} deleteExpForm={this.props.deleteExpForm} />
        </div>
      </div>
    )
  }
}

export default Forms;