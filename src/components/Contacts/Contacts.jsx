import { Link } from "react-router-dom";
import Contact from "./Contact";
import Spinner from "../Spinner";
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";

const Contacts = ({ contacts, loading, confirmDelete }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <Link to={"/contacts/add"} button className="btn mx-2" style={{ backgroundColor: PINK }}>
                  add new contact
                  <i className="fa fa-plus-circle mx-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} confirmDelete={()=> confirmDelete(c.id, c.fullname)} contact={c} />)
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  Not found user
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="Not Found"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
