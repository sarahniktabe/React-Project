import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";

import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  Navbar,
  NotFound,
} from "./components/Index";
import {getAllContacts ,getAllGroups} from './services/contactServices'

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();
      
        const { data: groupsData } = await getAllGroups();
        setGroups(groupsData);
        setContacts(contactsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<Contact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
