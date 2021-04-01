import React from "react";

class EduExp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataSchool, dataStudy, dataDateOfStudy, state } = this.props;
    const {
      school,
      study,
      dateOfStudy,
      edit,
      makeDisable,
    } = state;
    if (edit) {
      var valueSchool = school;
      var valueStudy = study;
      var valueDateOfStudy = dateOfStudy;
    }
    return (
      <div className="eduDiv">
        <form>
          <label htmlFor="school">School Name: </label>
          <input id="school" type="text" onChange={dataSchool} value={valueSchool} disabled={makeDisable}/>
          <label htmlFor="study">Title of Study: </label>
          <input id="study" type="text" onChange={dataStudy} value={valueStudy} disabled={makeDisable}/>
          <label htmlFor="date">Date of Study: </label>
          <input id="date" type="date" onChange={dataDateOfStudy} value={valueDateOfStudy} disabled={makeDisable}/>
        </form>
      </div>
    );
  }
}

export default EduExp;
