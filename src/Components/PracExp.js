import React from 'react';

class PracExp extends React.Component {
    constructor () {
        super (); 
    }

    render () {
        return (
            <div className="pracDiv">
                <form>
                    <label htmlFor="company">Company Name: </label><input id="company" type="text"/>
                    <label htmlFor="position">Position Title: </label><input id="position" type="text"/>
                    <label htmlFor="task">Tasks: </label><input id="tasks" type="text"/>
                    <label htmlFor="dateFrom">Date From: </label><input id="dateFrom" type="date"/>
                    <label htmlFor="dateTo">Date To: </label><input id="dateTo" type="date"/>
                </form>
            </div>
        );
    }
}

export default PracExp;