import React from "react";
import './styles/App.css'
import Forms from "./components/Forms";
import Preview from "./components/Preview";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
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