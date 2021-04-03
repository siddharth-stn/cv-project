import GenInfo from "./components/GenInfo";
import EduExp from "./components/EduExp";
import PracExp from "./components/PracExp";
import React, { useState, useEffect } from "react";

const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [school, setSchool] = useState("")
  const [study, setStudy] = useState("")
  const [dateOfStudy, setDateOfStudy] = useState("")
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [task, setTask] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false)
  const [edit, setEdit] = useState(false)
  const [makeDisable, setMakeDisable] = useState(false)

  const state = {
    name: name,
    email: email,
    phone: phone,
    school: school,
    study: study,
    dateOfStudy: dateOfStudy,
    company: company,
    position: position,
    task: task,
    dateFrom: dateFrom,
    dateTo: dateTo,
    buttonClicked: buttonClicked,
    edit: edit,
    makeDisable: makeDisable,
  };

  const bringName = (e) => {
    setName(e.target.value);
    setButtonClicked(false);
  };

  const bringEmail = (e) => {
    setEmail(e.target.value)
    setButtonClicked(false)
  };

  const bringPhone = (e) => {
    setPhone(e.target.value);
    setButtonClicked(false);
  }

  const bringSchool = (e) => {
    setSchool(e.target.value);
    setButtonClicked(false);
  }

  const bringStudy = (e) => {
    setStudy(e.target.value)
    setButtonClicked(false);
  }

  const bringDateOfStudy = (e) => {
    setDateOfStudy(e.target.value)
    setButtonClicked(false);
  }

  const bringCompany = (e) => {
    setCompany(e.target.value);
    setButtonClicked(false);
  }

  const bringPosition = (e) => {
    setPosition(e.target.value);
    setButtonClicked(false);
  }

  const bringTasks = (e) => {
    setTask(e.target.value);
    setButtonClicked(false);
  }

  const bringDateFrom = (e) => {
    setDateFrom(e.target.value);
      setButtonClicked(false);
  }

  const bringDateTo = (e) => {
    setDateTo (e.target.value);
      setButtonClicked(false);
  }

  const handleEdit = () => {
    setButtonClicked(false);
    setEdit(true);
    setMakeDisable(false);
  }

  const handleSubmit = () => {
    setButtonClicked(true);
    setMakeDisable(true);
  }

  if (buttonClicked == true) {
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
  };

  return (
    <div>
        <div>
          <GenInfo
            dataName={bringName}
            dataEmail={bringEmail}
            dataPhone={bringPhone}
            state={state}
          />
          <EduExp
            dataSchool={bringSchool}
            dataStudy={bringStudy}
            dataDateOfStudy={bringDateOfStudy}
            state={state}
          />
          <PracExp
            dataCompany={bringCompany}
            dataPosition={bringPosition}
            dataTasks={bringTasks}
            dataDateFrom={bringDateFrom}
            dataDateTo={bringDateTo}
            state={state}
          />
        </div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSubmit}>Submit</button>
        {element}
      </div>
    ); 


};

export default App;
