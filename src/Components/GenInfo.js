import React from "react";
import "./styles.css"

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {dataName, dataEmail, dataPhone, state} = this.props;
    const {name, email, phone, school, study, dateOfStudy, company,
    position, task, dateFrom, dateTo , edit, makeDisable} = state;
    if (edit) {
      var valueName = name;
      var valueEmail = email;
      var valuePhone = phone;
    }
    return (
      <div className="genDiv">
        <form>
            <label htmlFor="name">Name: </label><input id="name" type="text" onChange={dataName} value={valueName} disabled={makeDisable}/>
            <label htmlFor="name">Email: </label><input id="email" type="email" onChange={dataEmail} value={valueEmail} disabled={makeDisable}/>
            <label htmlFor="name">Phone No. : </label><input id="phone" type="number" onChange={dataPhone} value={valuePhone} disabled={makeDisable}/>
        </form>
      </div>
    );
  }
}

export default GenInfo;