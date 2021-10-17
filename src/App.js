import React, { Component } from "react";
import Section from './components/Phonebook/Section'
import Phonebook from "./components/Phonebook/Phonebook";
import Contacts from './components/Phonebook/Contacts'

class App extends Component{
state ={
  name: '',
  contacts: []
}

handleSubmitForm=contact =>{
  // !this.filteredContacts(contact)? 
   this.setState(prevState => ({
    contacts:[...prevState.contacts,{ name:contact.name, number:contact.number}]}) )
    // : alert(`${contact.name} is already in contacts`)
    }
  render(){return(

<div>
<Section title='Phonebook'>
<Phonebook contact={this.handleSubmitForm}/>
</Section>
<Section title='Contacts'>
  <Contacts contact={this.state.contacts} />
</Section>
</div>
  )}
}

export default App
