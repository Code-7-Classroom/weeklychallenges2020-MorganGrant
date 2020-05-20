import React from 'react';

const Hard = props => {
    return (
        <div>
            {
                props.info.map((person, index) => 
                    <div>
                        <h1 className="Name">{person.name}</h1>
                        <p className="Number">{person.number}</p>
                        <p className="DOB">{person.dob}</p>
                        <p className="ShortPara">{person.shortPara}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Hard