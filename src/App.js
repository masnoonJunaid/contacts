import React, {Component} from 'react';
import './App.css';


class ContactList extends React.Component {
  render(){
    const people = this.props.contacts
    return <ol>
    {people.map(person => (
      <li className="listed"key={person.name}>{person.name}</li>
    ))}
    </ol>
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <ContactList contacts={[
          {name:'Michael'},
          {name:'Ryan'},
          {name:'Tyler'},
          {name:'Masnoon'},
          {name:'Junaid'},
          {name:'Engineer'}
        ]}/>
        <ContactList contacts={[
          {name:'Amanda'},
          {name:'Richard'},
          {name:'Gilfoyle'}
        ]}/>
      </div>
    );
  }
}

export default App;
