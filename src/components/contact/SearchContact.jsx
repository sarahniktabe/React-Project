const SearchContact = ()=>{
    return(
        <div className="input-group mx-2 w-75">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: "purple" }}
      >
        <i className="fas fa-search" />
      </span>
      <input
        type="text"
        style={{ backgroundColor: "gray", borderColor: "purple" }}
        className="form-control"
        placeholder="search contact"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContact;