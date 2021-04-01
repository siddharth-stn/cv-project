import React from 'react';

class EduExp extends React.Component {
    constructor () {
        super (); 
    }

    render () {
        return (
            <div className="eduDiv">
                <form>
                    <label htmlFor="school">School Name: </label><input id="school" type="text"/>
                    <label htmlFor="study">Title of Study: </label><input id="study" type="text"/>
                    <label htmlFor="date">Date of Study: </label><input id="date" type="date"/>
                    <button>Edit</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EduExp;