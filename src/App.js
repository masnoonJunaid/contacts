import React, {Component} from 'react';
import ListContacts from './ListContacts'
import './App.css';
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
// import gallary from './gallary'


class App extends Component {
  state = {
    screen:'list', /*or create or list*/
    contacts : []
  }
  // fetching data with componentDidMount method from back-end server
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }
  removeContact = (contact) => {
    this.setState((state)=>({
      contacts:state.contacts.filter((c) =>c.id!==contact.id)
    }))
  }
  render(){
    return (
      <div classNam="app">
        {this.state.screen === 'list' && (
          <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
          onNavigate={() => {
            this.setState({screen:'create'})
          }}
          />

        )}
        {this.state.screen === 'create' && (
          <CreateContact/>
          // <gallary/>
        )}
      </div>
    )
  }
}

export default App;
