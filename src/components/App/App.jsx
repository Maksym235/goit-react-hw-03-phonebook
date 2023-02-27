import React, { Component } from 'react';
import data from 'Data/data.json';
import { Form } from 'components/FormToAddContact/FormToAddContact';
import ContactList from '../ContactsList/ContactsList';
import { Input } from '../FindInput/FindInput';
import { Conteiner, Title, ContactsTitle } from './appConteiner.styled';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const resp = localStorage.getItem('contacts');
    const parseResp = JSON.parse(resp);
    if (parseResp !== null) {
      this.setState({
        contacts: parseResp,
      });
      return;
    }
    this.setState({});
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onHandlerChange = evt => {
    const { value } = evt.currentTarget;
    this.setState({
      filter: value,
    });
  };

  onHandlerSubmit = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  findByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  deleteContact = cntId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== cntId),
      };
    });
  };

  render() {
    const filtredContacts = this.findByName();
    return (
      <Conteiner>
        <Title>
          PHONEBOOK
          <BsFillTelephonePlusFill />
        </Title>
        <Form onHandlerSubmit={this.onHandlerSubmit} />
        <ContactsTitle>
          Contacts <IoMdContact />
        </ContactsTitle>
        <Input onHandlerChange={this.onHandlerChange} />
        <ContactList
          data={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Conteiner>
    );
  }
}
