import "./Nav.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Router DOM
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { rdx_loggedout } from "../redux/userReducer";

// images
import logo from '../assets/imgs/logo.png'


export default function Nav({ pages, payNow, siteTitle }) {
  const counter = useSelector((state) => state.counter.value);
  const { loggedin,name } = useSelector((state) => state.user);

  const dispatch = useDispatch();
 
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            {loggedin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="todos">
                    Todos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="employees">
                    Employees
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="navbar-nav">
            <span className="navbar-text mx-2">{counter}</span>
            {loggedin ? (
              <>
              <span className="navbar-text text-warning mx-3">Welcome {name}</span>
              <span
                className="navbar-text text-danger fw-bold hand"
                onClick={() => dispatch(rdx_loggedout())}
                >
                Logout
              </span>
                </>
            ) : (
              <span className="navbar-text text-success fw-bold hand">Login</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
