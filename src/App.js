import React from "react";
import './styles/App.css'
import Forms from "./components/Forms";
import Preview from "./components/Preview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Jason',
      lastName: 'Barley',
      profession: 'Web Developer',
      email: 'jason@barley.com',
      phone: '(831) 555-3424',
      website: 'www.google.com',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, neque ac varius mattis, dolor nisl cursus mi, in blandit ligula arcu sed elit. Pellentesque at nisi sed nisi tempus euismod. Mauris porttitor semper libero ut sagittis. In odio quam, interdum at est eu, semper pellentesque nisl. Duis varius tellus vitae arcu lacinia, ac maximus risus pharetra.'
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }


  render() {
    return (
      <div className="app">
        <Forms general={this.state} onChange={this.onChange} />
        <Preview general={this.state} />
      </div>
    )
  }
}

export default App;