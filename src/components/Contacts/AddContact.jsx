import { useContext } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "..";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import { ContactContext } from "../../context/contactContext";

const AddContact = () => {
  const { loading, contact, onContactChange, groups, createContact, errors } =
    useContext(ContactContext);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              alt=""
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                right: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    Make a new contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  {errors?.map((error, index) => (
                    <p key={index} className="text-danger">
                      {error.message}
                    </p>
                  ))}
                  <form onSubmit={createContact}>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        value={contact.fullname}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="Fullname"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={contact.photo}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="URL Photo"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        type="number"
                        value={contact.mobile}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={onContactChange}
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        value={contact.job}
                        onChange={onContactChange}
                        className="form-control"
                        /*required={true}*/
                        placeholder="Job"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={onContactChange}
                        className="form-control"
                      >
                        <option value=""> Choose Group</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="Make user"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        opt out
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
