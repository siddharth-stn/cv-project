import React from 'react';

class EduExp extends React.Component {
    constructor (props) {
        super (props); 
    }
    render () {
        const {dataSchool, dataStudy, dataDateOfStudy} = this.props;
        return (
            <div className="eduDiv">
                <form>
                    <label htmlFor="school">School Name: </label><input id="school" type="text" onChange={dataSchool}/>
                    <label htmlFor="study">Title of Study: </label><input id="study" type="text" onChange={dataStudy}/>
                    <label htmlFor="date">Date of Study: </label><input id="date" type="date" onChange={dataDateOfStudy}/>
                    <button>Edit</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EduExp;