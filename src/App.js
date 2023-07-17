import { useState } from "react";
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
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
};

export default App;
