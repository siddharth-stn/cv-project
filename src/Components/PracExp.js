import React from 'react';

class PracExp extends React.Component {
    constructor (props) {
        super (props); 
    }

    render () {
        const {dataCompany, dataPosition, dataTasks, dataDateFrom, dataDateTo} = this.props;
        return (
            <div className="pracDiv">
                <form>
                    <label htmlFor="company">Company Name: </label><input id="company" type="text" onChange={dataCompany}/>
                    <label htmlFor="position">Position Title: </label><input id="position" type="text" onChange={dataPosition}/>
                    <label htmlFor="task">Tasks: </label><input id="tasks" type="text" onChange={dataTasks}/>
                    <label htmlFor="dateFrom">Date From: </label><input id="dateFrom" type="date" onChange={dataDateFrom}/>
                    <label htmlFor="dateTo">Date To: </label><input id="dateTo" type="date" onChange={dataDateTo}/>
                    <button>Edit</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PracExp;