import VeryEasy from './Challenges/VeryEasy'
import BasicInfo from './Challenges/Medium'
import Hard from './Challenges/Hard'
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  //Lines 11-16 is the Easy Challenge
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: `Grant`,
          number: `(123) 456-7890`,
          dob: `05/10/1995`,
        },
        {
          name: `Maria`,
          number: `(123) 456-7890`,
          dob: `05/10/1995`,
        },
        {
          name: `Mike`,
          number: `(123) 456-7890`,
          dob: `05/10/1995`,
        }
      ]

    }
  }

  render () {
    return (
      // <VeryEasy />
    //Medium
    // <BasicInfo info={this.state.person} />

    <Hard info = {this.state.persons}/>
    )
  }

}



export default App;