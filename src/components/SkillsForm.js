import React from "react";
import '../styles/SkillsForm.css'


class SkillsForm extends React.Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    const skills = this.props.skills;
    console.log(skills);
    return (
      <div>
        <h2>Skills</h2>
        <form className="skill-form" onSubmit={this.props.addSkill}>
          <div className="form-item">
            <label htmlFor="skill">Skill</label>
            <span><input type="text" id="skill-input" /><button type="submit">Add</button></span>
          </div>
        </form>
        {
          skills.map((skill, index) => (
            <div className="skill-item" key={skill.id}>
              {skill.name} <button onClick={this.props.deleteSkill} data-index={index}>Delete</button>
            </div>
          ))
        }
        

        
      </div>
    );
  }
}

export default SkillsForm;