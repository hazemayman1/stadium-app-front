import React, { Component } from "react";
import "./NavbarStyles.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout() {
    if (localStorage.getItem("authToken")) {
      localStorage.clear();
      window.location.href = "/login";
      alert("Logged Out!", "Successfully Logged Out", "success");
    } else {
      alert("Not Logged In!", "Please Login first", "warning");
    }
  }

  render() {
    return (
      <nav className="navbar p-3 mb-2 navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand mr-3">
          Tazakiro
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="r"></div>
          <div className="navbar-buttons ml-auto">

            {localStorage.getItem("authToken") == null && <Link to="/login">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp; Login
              </button>
            </Link>
            }
            {localStorage.getItem("authToken") == null && <Link to="/signup">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp; Sign Up
              </button>
            </Link>
            }
            <Link to="/home">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Home
              </button>
            </Link>

            <Link to="/matches">
              <button className="btn btn-success mr-2" type="submit">
                <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;
                Browse Matches
              </button>
            </Link>


            {localStorage.getItem("authToken") && (<button
              className="btn btn-success mr-2"
              type="submit"
              onClick={() => this.logout()}
            >
              <i class="fa fa-send" aria-hidden="true"></i>&nbsp; Logout
            </button>)
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;