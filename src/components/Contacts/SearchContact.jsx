import { useContext } from "react";
import {PURPLE} from '../../helpers/colors'
import {ContactContext} from '../../context/contactContext'


const SearchContact = ()=>{
  const {contactQuery, contactSearch} = useContext(ContactContext);

    return(
        <div className="input-group mx-2 w-100">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE}}
      >
        <i className="fas fa-search"/>
      </span>
      <input
        type="text"
        value={contactQuery.text}
        onChange={contactSearch}
        className="form-control"
        placeholder="search contact"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;