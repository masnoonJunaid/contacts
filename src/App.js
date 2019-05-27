import React, {Component} from 'react';
import ListContacts from './ListContacts'
import './App.css';


class App extends Component {
  state = {
    contacts : [
    {
      "id" :"masnoon",
      "name": "Masnoon Junaid",
      "email":"masnoon20@gmail.com",
      "avatarURL":"https://localhost:5001/ryan.jpg"
    },
    {
      "id":"minhaz",
      "name":"Minhaz Alam",
      "email":"minhazahmad564@gmail.com",
      "avatarURL":"https://localhost:5001/michael.jpg"
    },
    {
      "id":"saif",
      "name":"Saif Alam",
      "email":"saifalam17@gmail.com",
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
