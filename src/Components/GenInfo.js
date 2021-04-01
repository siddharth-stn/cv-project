import React from "react";

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {dataName, dataEmail, dataPhone} = this.props;
    return (
      <div className="genDiv">
        <form>
            <label htmlFor="name">Name: </label><input id="name" type="text" onChange={dataName}/>
            <label htmlFor="name">Email: </label><input id="email" type="email" onChange={dataEmail}/>
            <label htmlFor="name">Phone No. : </label><input id="phone" type="number" onChange={dataPhone}/>
        </form>
      </div>
    );
  }
}

export default GenInfo;