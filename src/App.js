import React, { Component } from "react";
import Section from './components/Phonebook/Section'
import Phonebook from "./components/Phonebook/Phonebook";
import Contacts from './components/Phonebook/Contacts';
import Filter from './components/Phonebook/Filter'

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',}


    
handleSubmitForm=contact =>{
  !this.filteredContacts(contact)? 
   this.setState(prevState => ({
    contacts:[...prevState.contacts,{ name:contact.name, number:contact.number}]}) )
    : alert(`${contact.name} is already in contacts`)
    }

    filteredContacts = (data) => {
    
      return this.state.contacts.find(contact => contact.name === data.name) 
     
    }
    changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
    };
  
  
    
    getVisibleContact = () => {
      const { filter, contacts } = this.state;
      const normalizedFilter = filter.toLowerCase();
       return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    };
  
    deleteContact = name => {
      console.log(name);
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.name !== name),
      }));
    };

    componentDidMount() {                         //ОДИН РАЗ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
      console.log('componentDidMount');    
      const contacts = localStorage.getItem('contacts')   // получили из локал сторадж
    const parsedcontacts = JSON.parse(contacts)
      console.log(parsedcontacts);  
      
    if (parsedcontacts) {   //проверка на наличие даных в локал стораж
      this.setState({contacts: parsedcontacts} )
    }
    
    }
      
    componentDidUpdate(prevProps, prevState){      //ПРИ ОБНОВЛЕНИИ СТРАНИЦЫ(ПЕРЕД)
      console.log('componentDidUpdate');
      if  (this.state.contacts !== prevState.contacts ) {
        console.log('update contacts');
    
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))//отпрвили в локал стораж
      }
    }

  render(){
    
    const visibleContact = this.getVisibleContact();
    return(

<div>
<Section title='Phonebook'>
<Phonebook contact={this.handleSubmitForm}/>
</Section>

<Section title='Contacts'>
<Filter onChange={this.changeFilter} />
  <Contacts onDeleteContact={this.deleteContact} contact={visibleContact} contacts={this.state.contacts} />
</Section>
</div>
  )}
}

export default App
