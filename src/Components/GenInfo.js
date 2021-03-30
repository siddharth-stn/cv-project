import React from "react";

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="genDiv">
        <form>
            <label htmlFor="name">Name: </label><input id="name" type="text"/>
            <label htmlFor="name">Email: </label><input id="email" type="email"/>
            <label htmlFor="name">Phone No. : </label><input id="phone" type="number"/>
        </form>
        
    </div>
    );
  }
}

export default GenInfo;