import React, { Component } from "react";
import "./Login.css";
import swal from "sweetalert";
import { wait } from "@testing-library/react";
import Navbar from "../Homepage/Navbar.js";


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
      .then((callback) => 
      { console.log("callback",callback)
        localStorage.setItem("isAuth", 0);
        if ( callback.status===200) {
          localStorage.setItem("isAuth", 1);
        }
        return callback.json()
      }
      )
      .then((callbackJson) => {console.log(callbackJson.user.address)
  
        if(localStorage.getItem("isAuth")==1){
           
           localStorage.setItem("email", callbackJson.user.email);
           localStorage.setItem("firstname", callbackJson.user.firstname);
           localStorage.setItem("lastname", callbackJson.user.lastname);
           localStorage.setItem("authToken", callbackJson.user._id);
           localStorage.setItem("birthdate", callbackJson.user.birthdate);
           localStorage.setItem("gender", callbackJson.user.gender);
           localStorage.setItem("city", callbackJson.user.city);
           localStorage.setItem("address", callbackJson.user.address);
           localStorage.setItem("logedin", 1);
            swal("Logged in successfully!", "No warnings!", "success");

          window.location.href="/matches";
          
        }else{
          swal("Error!", "Incorrect Credentials", "error");
         }
      })

      .catch((error) => {
        console.log(error);
      });
      
      this.setState({
      user: "",
      adminEmail: "",
      adminPassword: "",
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
      <div>
      <Navbar/>
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