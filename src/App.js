import GenInfo from './components/GenInfo';
import EduExp from './components/EduExp';
import PracExp from './components/PracExp';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    };
    this.bringName = this.bringName.bind(this);
  }

  bringName (e) {
    this.setState ({
      name: e.target.value,
    });
  }


  render () {
    const {name, email, phone} = this.state;
    return (
      <div>
        <div>
          <GenInfo data={this.bringName}/>
          <EduExp/>
          <PracExp/>  
        </div>
        <div>
          <h1>My name is: {name}</h1>
        </div>
      </div>
    );
  }
  
}

export default App;
