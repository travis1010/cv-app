import React from "react";
import './styles/App.css'
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import uniqid from "uniqid";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as filestack from 'filestack-js';
import axios from "axios";
import {useEffect} from 'react'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Firstname',
      lastName: 'Lastname',
      profession: 'Professional Title',
      email: 'email@email.com',
      phone: '(555) 555-5555',
      website: 'www.website.com',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, neque ac varius mattis, dolor nisl cursus mi, in blandit ligula arcu sed elit. Pellentesque at nisi sed nisi tempus euismod. Mauris porttitor semper libero ut sagittis. In odio quam, interdum at est eu, semper pellentesque nisl. Duis varius tellus vitae arcu lacinia, ac maximus risus pharetra.',
      imgsrc: null,
      education: [ 
        { degree: 'My Degree', school: 'University of School', yearStart: '2002', yearEnd: '2007', id: uniqid() } 
      ],
      skills: [
        {name: 'HTML', id: uniqid() },
        {name: 'CSS', id: uniqid() },
        {name: 'JavaScript', id: uniqid() },
        {name: 'React', id: uniqid() },
      ],
      experience: [
        { company: 'my company', title: 'Job Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, neque ac varius mattis, dolor nisl cursus mi, in blandit ligula arcu sed elit. Pellentesque at nisi sed nisi tempus euismod. Mauris porttitor semper libero ut sagittis. In odio quam, interdum at est eu, semper pellentesque nisl. Duis varius tellus vitae arcu lacinia, ac maximus risus pharetra.', 
        yearStart: '2010', yearEnd: '2014', id: uniqid() }
      ]
    }
    this.onChange = this.onChange.bind(this);
    this.onChangeEdu = this.onChangeEdu.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.deleteEduForm = this.deleteEduForm.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.onChangeExp = this.onChangeExp.bind(this);
    this.addExpForm = this.addExpForm.bind(this);
    this.deleteExpForm = this.deleteExpForm.bind(this);
    this.submitImg = this.submitImg.bind(this);
    this.savePDF = this.savePDF.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }



  submitImg(e) {
    fetch('.netlify/functions/getapi​').then((res) => console.log(res))

    /*
    const client = filestack.init(API KEY GOES HERE);
    const options = {
      onUploadDone: file => {
        console.log(file);
        document.getElementById('avatar').src = file.filesUploaded[0].url;
        document.getElementById('image-file-name').textContent = file.filesUploaded[0].filename;
      },
      onFileSelected: file => {
        if (file.size > 10000 * 1000) {
            throw new Error('File too big, select something smaller than 10MB');
        }
      },
      accept: "image/*",
      maxFiles: 1,
      
    }
    client.picker(options).open(); */
  }

  onChangeEdu(e) {
    const index = e.target.getAttribute('data-index');
    // 1. Make a shallow copy of the items
    let items = [...this.state.education];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[index]};
    // 3. Replace the property you're intested in
    item[e.target.id] = e.target.value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    this.setState({education: items});
  }

  addEduForm() {
    this.setState(prevState => ({
      education: [...prevState.education, { degree: '', school: '', yearStart: '', yearEnd: '', id: uniqid() } ]
    }));
  }

  deleteEduForm(e) {
    const index = e.target.getAttribute('data-index');
    console.log(this.state.education[index])
    this.setState((prevState) => ({
      education: prevState.education.filter((_, i) => i != index)
    }));
  }

  onChangeExp(e) {
    const index = e.target.getAttribute('data-index');
    // 1. Make a shallow copy of the items
    let items = [...this.state.experience];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[index]};
    // 3. Replace the property you're intested in
    item[e.target.id] = e.target.value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    // 5. Set the state to our new copy
    this.setState({experience: items});
  }

  addExpForm() {
    this.setState(prevState => ({
      experience: [...prevState.experience, { company: '', title: '', description: '', yearStart: '', yearEnd: '', id: uniqid() } ]
    }));
  }

  deleteExpForm(e) {
    const index = e.target.getAttribute('data-index');
    console.log(this.state.experience[index])
    this.setState((prevState) => ({
      experience: prevState.experience.filter((_, i) => i != index)
    }));
  }

  addSkill(e) {
    e.preventDefault();
    const newValue = document.getElementById('skill-input').value
    const newSkill = {
      name: newValue,
      id: uniqid()
    }
    this.setState(prevState => ({
      skills: [...prevState.skills, newSkill ]
    }));
    document.getElementById('skill-input').value = '';
  }

  deleteSkill(e) {
    const index = e.target.getAttribute('data-index');
    this.setState((prevState) => ({
      skills: prevState.skills.filter((_, i) => i != index)
    }));
  }

  savePDF() {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: [1360, 1760],
      hotfixes: ['px_scaling'],
    });
    
    const preview = document.querySelector('.preview-page');
    document.getElementById('loading').style.display = "flex";
    preview.style.transform = "translateY(-4000px) translateX(-4000px";
    html2canvas(preview, {
      width: 1360,
      height: 1760,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      scale: 2,
      allowTaint: true,
      useCORS: true
    }).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      doc.addImage(img, "PNG", 0, 0, 1360, 1760);
      doc.save("myCV.pdf");
      preview.style.transform = "scale(0.5)";
      document.getElementById('loading').style.display = "none";
      
    })

  }

  render() {
    return (
      <div className="app">
        <Forms props={this.state} onChange={this.onChange} onChangeEdu={this.onChangeEdu} addEduForm={this.addEduForm} deleteEduForm={this.deleteEduForm} 
        addSkill={this.addSkill} deleteSkill={this.deleteSkill} onChangeExp={this.onChangeExp} addExpForm={this.addExpForm} deleteExpForm={this.deleteExpForm}
        submitImg={this.submitImg} />
        <Preview props={this.state} savePDF={this.savePDF} />
        
      </div>
    )
  }
}



export default App;