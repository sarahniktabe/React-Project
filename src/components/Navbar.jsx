import SearchContact from "./Contacts/SearchContact";
import {PURPLE , BACKGROUND } from '../helpers/colors'
import { useLocation } from "react-router-dom";

const Navbar = ({query, search}) =>{
    const location = useLocation();
    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
        style={{ backgroundColor: BACKGROUND}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className="navbar-brand float-start">
                        <i className="fas fa-id-badge mx-1" style={{color: PURPLE}}/>{" "}
                        web application managment {" "}
                        <span style={{color: PURPLE}}>contact</span>
                        </div>
                    </div>
                    <div className="col">
                    <div className="navbar float-end">
                    {location.pathname === "/contacts" ? (
                            <div>
                            <SearchContact query={query} search={search} />
                            </div>
                        ) : null};
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;