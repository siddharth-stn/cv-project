import React from "react";
import "./styles.css";
class PracExp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      dataCompany,
      dataPosition,
      dataTasks,
      dataDateFrom,
      dataDateTo,
      state,
    } = this.props;
    const {
      company,
      position,
      task,
      dateFrom,
      dateTo,
      edit,
      makeDisable,
    } = state;
    if (edit) {
      var valueCompany = company;
      var valuePosition = position;
      var valueTask = task;
      var valueDateFrom = dateFrom;
      var valueDateTo = dateTo;
    }
    return (
      <div className="pracDiv">
        <form>
          <label htmlFor="company">Company Name: </label>
          <input id="company" type="text" onChange={dataCompany} value={valueCompany} disabled={makeDisable}/>
          <label htmlFor="position">Position Title: </label>
          <input id="position" type="text" onChange={dataPosition} value={valuePosition} disabled={makeDisable}/>
          <label htmlFor="task">Tasks: </label>
          <input id="tasks" type="text" onChange={dataTasks} value={valueTask} disabled={makeDisable}/>
          <label htmlFor="dateFrom">Date From: </label>
          <input id="dateFrom" type="date" onChange={dataDateFrom} value={valueDateFrom} disabled={makeDisable}/>
          <label htmlFor="dateTo">Date To: </label>
          <input id="dateTo" type="date" onChange={dataDateTo} value={valueDateTo} disabled={makeDisable}/>
        </form>
      </div>
    );
  }
}

export default PracExp;
