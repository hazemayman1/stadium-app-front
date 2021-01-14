import React, { Component } from "react";
import "./Login.css";
import swal from "sweetalert";
import { wait } from "@testing-library/react";
import Navbar from '../Homepage/Navbar';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      adminEmail: "",
      adminPassword: "",

    };
  }

  //   componentDidMount(){
  //     console.log(localStorage.getItem('authToken'));
  //     if(localStorage.getItem('authToken')){
  //       window.location.href="/matches"
  //     }
  // }

  onSubmitHandler = (e) => {
    //Validation
    if (this.state.adminEmail == null && this.state.adminPassword == null) {
      return alert("Cannot submit empty fields");
    }

    // console.log(this.state.adminEmail);
    // console.log(this.state.adminPassword);

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: this.state.adminEmail,
        password: this.state.adminPassword,
      }),
    })
      .then((callback) => callback.json())
      .then((callbackJson) => {
        console.log(callbackJson.status)
        if (callbackJson.status === "success") {
          localStorage.setItem("username", callbackJson.email);
          localStorage.setItem("firstname", callbackJson.firstname);
          localStorage.setItem("lastname", callbackJson.lastname);
          localStorage.setItem("authToken", callbackJson._id);
          localStorage.setItem("birthdate", callbackJson.birthdate);
          localStorage.setItem("gender", callbackJson.gender);
          localStorage.setItem("city", callbackJson.city);
          localStorage.setItem("address", callbackJson.address);
          localStorage.setItem("username", callbackJson.email);
          swal("Logged in successfully!", "No warnings!", "success");
          this.setState({
            user: callbackJson.username
          },
            function () { console.log("setState completed", this.state, this.user) }
          );


          window.location.href = "/matches";

        } else {
          swal("Error!", "Incorrect Credentials", "error");
        }
      })

      .catch((error) => {
        console.log(error);
      });
    //   console.log("setState completed", this.state , this.user)
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>        <Navbar />
        <div className="login-parent">

          <div className="login-name">

          </div>
          <div className="login-form">
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className={"text-white"}>
                  <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Admin Name
              </label>
                <input
                  name="adminEmail"
                  onChange={this.onChangeHandler}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.adminEmail}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className={"text-white"}>
                  <i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Admin
                Password
              </label>
                <input
                  name="adminPassword"
                  onChange={this.onChangeHandler}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={this.state.adminPassword}
                  required
                />
              </div>

              <button
                type="button"
                className="submit-button"
                onClick={() => this.onSubmitHandler()}
              >
                <i className="fa fa-send"></i>&nbsp; Login
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;