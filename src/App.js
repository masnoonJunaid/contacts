import React, {Component} from 'react';
import ListContacts from './ListContacts'
import './App.css';


class App extends Component {
  state = {
    contacts : [
    {
      "id" :"ryan",
      "name": "Masnoon Junaid",
      "email":"masnoon20@gmail.com",
      "avatarURL":"https://localhost:5001/ryan.jpg"
    },
    {
      "id":"michael",
      "name":"Michael Jackson",
      "email":"michael@reacttraining.com",
      "avatarURL":"https://localhost:5001/michael.jpg"
    },
    {
      "id":"tyler",
      "name":"Tyler McGinnis",
      "email":"tyler@reacttraining.com",
      "avatarURL":"https://localhost:5001/tyler.jpg"
    }
    ]
  }
  removeContact = (contact) => {
    this.setState((state)=>({
      contacts:state.contacts.filter((c) =>c.id!==contact.id)
    }))
  }
  render(){
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
