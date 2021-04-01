import GenInfo from "./components/GenInfo";
import EduExp from "./components/EduExp";
import PracExp from "./components/PracExp";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      study: "",
      dateOfStudy: "",
      company: "",
      position: "",
      task: "",
      dateFrom: "",
      dateTo: "",
      buttonClicked: false,
      edit: false,
      makeDisable: false,
    };

    this.bringName = this.bringName.bind(this);
    this.bringEmail = this.bringEmail.bind(this);
    this.bringPhone = this.bringPhone.bind(this);
    this.bringSchool = this.bringSchool.bind(this);
    this.bringStudy = this.bringStudy.bind(this);
    this.bringDateOfStudy = this.bringDateOfStudy.bind(this);
    this.bringCompany = this.bringCompany.bind(this);
    this.bringPosition = this.bringPosition.bind(this);
    this.bringTasks = this.bringTasks.bind(this);
    this.bringDateFrom = this.bringDateFrom.bind(this);
    this.bringDateTo = this.bringDateTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  bringName(e) {
    this.setState({
      name: e.target.value,
      buttonClicked: false,
    });
  }

  bringEmail(e) {
    this.setState({
      email: e.target.value,
      buttonClicked: false,
    });
  }

  bringPhone(e) {
    this.setState({
      phone: e.target.value,
      buttonClicked: false,
    });
  }

  bringSchool(e) {
    this.setState({
      school: e.target.value,
      buttonClicked: false,
    });
  }

  bringStudy(e) {
    this.setState({
      study: e.target.value,
      buttonClicked: false,
    });
  }

  bringDateOfStudy(e) {
    this.setState({
      dateOfStudy: e.target.value,
      buttonClicked: false,
    });
  }

  bringCompany(e) {
    this.setState({
      company: e.target.value,
      buttonClicked: false,
    });
  }

  bringPosition(e) {
    this.setState({
      position: e.target.value,
      buttonClicked: false,
    });
  }

  bringTasks(e) {
    this.setState({
      task: e.target.value,
      buttonClicked: false,
    });
  }

  bringDateFrom(e) {
    this.setState({
      dateFrom: e.target.value,
      buttonClicked: false,
    });
  }

  bringDateTo(e) {
    this.setState({
      dateTo: e.target.value,
      buttonClicked: false,
    });
  }

  handleEdit() {
    this.setState({
      buttonClicked: false,
      edit: true,
      makeDisable: false,
    });
  }

  handleSubmit() {
    this.setState({
      buttonClicked: true,
      makeDisable: true,
    });
  }

  render() {
    const {
      name,
      email,
      phone,
      school,
      study,
      dateOfStudy,
      company,
      position,
      task,
      dateFrom,
      dateTo,
    } = this.state;

    if (this.state.buttonClicked == true) {
      var element = (
        <div>
          <h1>My Name is: {name}</h1>
          <h1>My Email is: {email}</h1>
          <h1>My Phone Number is: {phone}</h1>
          <h1>My School Name is: {school}</h1>
          <h1>My Study is: {study}</h1>
          <h1>My date of Study is: {dateOfStudy}</h1>
          <h1>My Company Name is: {company}</h1>
          <h1>My Position Title is: {position}</h1>
          <h1>The task completed is: {task}</h1>
          <h1>Date from: {dateFrom}</h1>
          <h1>Date To: {dateTo}</h1>
        </div>
      );
    }

    return (
      <div>
        <div>
          <GenInfo
            dataName={this.bringName}
            dataEmail={this.bringEmail}
            dataPhone={this.bringPhone}
            state={this.state}
          />
          <EduExp
            dataSchool={this.bringSchool}
            dataStudy={this.bringStudy}
            dataDateOfStudy={this.bringDateOfStudy}
            state={this.state}
          />
          <PracExp
            dataCompany={this.bringCompany}
            dataPosition={this.bringPosition}
            dataTasks={this.bringTasks}
            dataDateFrom={this.bringDateFrom}
            dataDateTo={this.bringDateTo}
            state={this.state}
          />
        </div>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleSubmit}>Submit</button>
        {element}
      </div>
    );
  }
}

export default App;
