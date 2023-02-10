import shortid from "shortid";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { usersAddAction, usersDeleteAction, usersSearchAction } from "redux/users/users.action";

export const App = () => {
  const filter = useSelector(state => state.users.search)
  const contacts = useSelector(state => state.users.data)

  const dispatch = useDispatch()

  const deleteFromContacts = (contactToDelete) => {
    dispatch(usersDeleteAction(contactToDelete))
  };
  
  const checkIsInContacts = (value) => {
    return contacts.find(contact => contact.name === value) !== undefined;
  };
  
  const addFilter = (value) => {
    console.log(contacts.map(c => console.log(c)));
    dispatch(usersSearchAction(`${value}`))
  };
  
  const addContact = (name, telephone) => {
    if (checkIsInContacts(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    const contact = {
      id: shortid.generate(),
      name,
      telephone,
    };
    dispatch(usersAddAction(contact))
    
  };
  
  const contactsFilter = () => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
    return filtered;
  };
  
  return (
    <Container>
      <Form onSubmit={addContact} />
      <Title>Contacts</Title>
      <InputFilter onInput={addFilter} value={filter} />
      <Contacts contacts={contactsFilter()} deleteFromContacts={deleteFromContacts} />
    </Container>
  );
  };
  