/*VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information 
for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
*/
import React from 'react';


class VeryEasy extends React.Component {
    render(){
        return(
            <div>
                <h1 className = "Name">Grant</h1>
                <p className = "Number">(123) 456-7890</p>
                <p className = "DOB">05/10/1995</p>
                <p className = "ShortPara">Here's a short paragraph...use youre imagination</p>
            </div>
        );
    }
}

export default VeryEasy