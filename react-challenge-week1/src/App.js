import VeryEasy from './Challenges/VeryEasy'
import BasicInfo from './Challenges/Medium'
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  //Lines 11-16 is the Easy Challenge
  constructor (props) {
    super(props);
    this.state = {
      person: {
        name: `Grant`,
        number: `(123) 456-7890`,
        dob: `05/10/1995`,
        shortPara:`Here's a short Paragraph...use your imagination`
      }
    }
  }

  render(){

    return (
      // <VeryEasy />
      <BasicInfo info = {this.state.person}/>
    )
  }
}

export default App;