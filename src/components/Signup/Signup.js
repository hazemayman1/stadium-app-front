import React, { Component } from 'react';
import "./Signup.css";
import swal from "sweetalert";
import Navbar from '../Homepage/Navbar';


const initialState = {
  userName: "",
  userEmail: "",
  password: "",
  conPassword: "",
  unameerror: "",
  uemailerror: "",
  passworderror: "",
  conpassworderror: "",
  firstname: "",
  lastname: "",
  birthdate: "",
  gender: "",
  city: "",
  address: "",
  role: "",
  emptyvalue: "",
};

class Signup extends Component {
  state = initialState;

  inputChangeHandler = (e) => {

    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  };

  validate = () => {
    let unameerror = "";
    let uemailerror = "";
    let passworderror = "";
    let conpassworderror = "";
    let emptyvalue = "";
    if (!this.state.firstname || !this.state.lastname || !this.state.birthdate || !this.state.gender || !this.state.role || !this.state.city) {
      emptyvalue = "There is an empty field";
    }
    if (!this.state.userName) {
      unameerror = "Enter User Name";
    }

    if (!this.state.userEmail.includes("@")) {
      uemailerror = "Invalid Email";
    }

    if (!this.state.password) {
      passworderror = "Enter Password";
    }

    if (!this.state.conPassword) {
      conpassworderror = "Confirm Password";
    }

    if (unameerror || uemailerror || passworderror || conpassworderror || emptyvalue) {
      this.setState({
        unameerror,
        uemailerror,
        passworderror,
        conpassworderror,
      });
      return false;
    }

    return true;
  };

  formSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state.userName);
      console.log(this.state.userEmail);
      console.log(this.state.password);
      console.log(this.state.conPassword);
      console.log(this.state.firstname);
      console.log(this.state.lastname)
      console.log(this.state.birthdate);
      console.log(this.state.gender);
      console.log(this.state.city);
      console.log(this.state.address);
      console.log(this.state.role);
      //clear form
      this.setState(initialState);
    }

    if (this.state.userName == null && this.state.userEmail == null && this.state.password == null && this.state.conPassword == null) {
      return alert("Cannot submit empty fields");
    }
    if (this.state.password !== this.state.conPassword) {
      alert("Password Mismatch!");
      return;
    }

    // swal("User Details Added Successfully!", "No warnings! ", "success");
    let thisState = this;
    let stateaccess = this.state;
    alert(JSON.stringify(this.state));
    fetch("http://localhost:3000/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.userName,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        birthdate: this.state.birthdate,
        gender: this.state.gender,
        city: this.state.city,
        address: this.state.address,
        email: this.state.userEmail,
        role: this.state.role,
      }),
    })
      .then(function (callback) {
        if (callback.status === 201) {
          console.log(callback.json());
          alert("Submitted Successfully!");
          window.location.href = "/matches";
        }
        else if (callback.status === 400) {
          alert("Wrong Submission!");
        }


      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      userName: "",
      userEmail: "",
      password: "",
      conPassword: "",
      firstname: "",
      lastname: "",
      birthdate: "",
      gender: "",
      city: "",
      address: "",
      role: "",
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="e">
          <br></br>

          <div className="signup-main mt-1 mb-3 p-" >
            <br></br>
            <div className="signup-box-form">
              <div className="container">
                <form onSubmit={this.formSubmitHandler}>
                  <div className="form-group">
                    <label>
                      <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Username
              </label>
                    <input
                      type="text"
                      onChange={this.inputChangeHandler}
                      name="userName"
                      className="form-control"
                      value={this.state.userName}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.unameerror}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email Address
              </label>
                    <input
                      name="userEmail"
                      type="email"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      value={this.state.userEmail}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                &nbsp;Password
              </label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      id="exampleInputPassword1"
                      value={this.state.password}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.passworderror}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;ConfirmPassword
              </label>
                    <input
                      name="conPassword"
                      type="password"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      id="exampleInputPassword1"
                      value={this.state.conPassword}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.conpassworderror}
                    </div>
                  </div>

                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Firstname
              </label>
                  <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    name="firstname"
                    className="form-control"
                    value={this.state.firstname}
                    required
                  />
                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Lastname
              </label>
                  <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    name="lastname"
                    className="form-control"
                    value={this.state.lastname}
                    required
                  />

                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Birthdate
              </label>
                  <input
                    type="date"
                    onChange={this.inputChangeHandler}
                    name="birthdate"
                    className="form-control"
                    value={this.state.birthdate}

                  />
                  <br></br>
                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>Gender&nbsp;
              </label>
                  <input type="radio" name="gender" className="form-control" value="male" onChange={this.inputChangeHandler} />Male
              <input type="radio" name="gender" className="form-control" value="female" onChange={this.inputChangeHandler} /> Female
              <br></br>
                  <label >City: </label>
                  <select name="city" className="form-control" onChange={this.inputChangeHandler}>
                    <option value="Giza">Giza</option>
                    <option value="Alexandria" > Alexandria</option>
                    <option value="Aswan"> Aswan</option>
                  </select>
                  <br></br>
                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Address
              </label>
                  <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    name="address"
                    className="form-control"
                    value={this.state.address}

                  />
                  <br></br>
                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Role&nbsp;
              </label>
                  <input type="radio" name="role" className="form-control" value="manager" onChange={this.inputChangeHandler} />Manager
              <input type="radio" name="role" className="form-control" value="fan" onChange={this.inputChangeHandler} /> Fan
              <br></br><br></br>
                  <button type="submit" className="btn-submit">
                    SignUp
            </button>
                </form>
              </div>
            </div>
            <div className="signup-box-name">
              <h1 className="title-text">
                <img src="./stad.png" alt="stadium" width="400" height="400"></img>
                <br></br>
              </h1>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Signup;