import shortid from "shortid";
import { Form } from "./Form/Form";
import {Contacts } from "./Contacts/Contacts";
import {InputFilter} from "./InputFilter/InputFilter";
import {Container,Title} from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { usersSearchAction,usersAddAction, usersDeleteAction,} from "redux/users/users.slice";
// import { usersAddAction, usersDeleteAction, usersSearchAction } from "redux/users/users.action";

export const App = () => {
  const filter = useSelector(state => state.users.search)
  const contacts = useSelector(state => state.users.data)

  const dispatch = useDispatch()

  // const [contacts, setContacts] = useState([
  //   {id: 'id-1', name: 'Rosie Simpson', telephone: '459-12-56'},
  // ]);

  const deleteFromContacts = (contactToDelete) => {
    dispatch(usersDeleteAction(contactToDelete))
    // setContacts(deletedList);
  };
  
  const checkIsInContacts = (value) => {
    return contacts.find(contact => contact.name === value) !== undefined;
  };
  
  const addFilter = (value) => {
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
    // setContacts(prev => [...prev, contact]);
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
  