/*
MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  
Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’.
(This challenge should not change the look of the page)
*/

import React from 'react';


const BasicInfo = props => {
    return (
        <div>
            <h1 className="Name">{props.info.name}</h1>
            <p className="Number">{props.info.number}</p>
            <p className="DOB">{props.info.dob}</p>
            <p className="ShortPara">{props.info.shortPara}</p>
        </div>
    );
}

export default BasicInfo