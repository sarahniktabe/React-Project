import { useState } from "react";
import { Routes , Route, useNavigate , Navigate } from "react-router-dom";
import "./App.css";
import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  SearchContact,
  ViewContact,
  Navbar,
  Spinner,
} 
from "./components/Index";


const App = () => {
  const [getContacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts"/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/contacts/:contactId" element={<Contacts/>} />
        <Route path="/contacts/edit/:contactId" element={<EditContact/>} />
        <Route path="/notfounf" element={<NotFound/>} />
      </Routes>
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
};

export default App;
