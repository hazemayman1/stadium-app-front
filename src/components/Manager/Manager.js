import React, { Component } from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem, UncontrolledCollapse, Button, ListGroupItemHeading, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import "./Manager.css";
import Navbar from '../Homepage/Navbar';
import { Redirect } from 'react-router';

const initialState = {
  t1name: "",
  t2name: "",
  venue: "",
  ref1: "",
  ref2: "",
  ref3: "",
  date: "",
  team1error: "",
  team2error: "",
  venueerror: "",
  ref1error: "",
  ref2error: "",
  ref3error: "",
  daterror: "",
  username: "",
};

class Manager extends Component {

  state = initialState;

  inputChangeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  validate = () => {
    let team1error = "";
    let team2error = "";
    let venueerror = "";
    let ref1error = "";
    let ref2error = "";
    let ref3error = "";
    let daterror = "";


    if (!this.state.t1name) {
      team1error = "This field is required";
    }

    if (!this.state.t2name) {
      team2error = "This field is required";
    }
    if (!this.state.venue) {
      venueerror = "This field is required";
    }
    if (!this.state.ref1) {
      ref1error = "This field is required";
    }
    if (!this.state.ref2) {
      ref2error = "This field is required";
    }
    if (!this.state.ref3) {
      ref3error = "This field is required";
    }
    if (!this.state.date) {
      daterror = "This field is required";
    }


    if (team1error || team2error || venueerror || ref1error || ref2error || ref3error || daterror) {
      this.setState({
        team1error,
        team2error,
        venueerror,
        ref1error,
        ref2error,
        ref3error,
        daterror,
      });
      return false;
    }
    alert("match added successfully!");
    return true;
  };

  onSubmitHandler = (e) => {
    const isValid = this.validate();
    if (isValid) {
      //clear form
      this.setState(initialState);
    }

    if (
      this.state.t1name == null &&
      this.state.t2name == null &&
      this.state.venue == null &&
      this.state.ref1 == null &&
      this.state.ref2 == null &&
      this.state.ref3 == null &&
      this.state.date == null
    ) {
      return alert("Cannot submit empty fields");
    }
    fetch("http://localhost:3000/view", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        'homeTeam': this.state.t1name,
        'awayTeam': this.state.t2name,
        'matchVenue': this.state.venue,
        'mainReferee': this.state.ref1,
        'twolinesmen[0]': this.state.ref2,
        'twolinesmen[1]': this.state.ref3,
        'Date': this.state.date,
      }),
    })
      .then(function (callback) {
        console.log(callback.json());
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({
      t1name: "",
      t2name: "",
      venue: "",
      ref1: "",
      ref2: "",
      ref3: "",
      date: "",
    });
  };

  render() {
    if(localStorage.getItem("authToken") == null){
      return(<Redirect to = "/home"/>)
    }
    return (
      <div>
        <Navbar />
        <h1 className="manager-title">Add New Match</h1>
        <div className="e">
          <br></br>

          <div className="signup-main mt-1 mb-3 p-" >
            <br></br>
            <div className="signup-box-form">
              <div className="container">
                <form onSubmit={this.formSubmitHandler}>
                  <div className="form-group">
                    <label>
                      <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Team 1
              </label>
                    <input
                      type="text"
                      onChange={this.inputChangeHandler}
                      name="homeTeam"
                      className="form-control"
                      value={this.state.t1name}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.team1error}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;Team 2
              </label>
                    <input
                      name="text"
                      type="awayTeam"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      value={this.state.t2name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                &nbsp;Location
              </label>
                    <input
                      type="text"
                      name="matchVenue"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      id="exampleInputPassword1"
                      value={this.state.venue}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.venueerror}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <i class="fa fa-unlock-alt" aria-hidden="true"></i>&nbsp;Main Referee
              </label>
                    <input
                      name="mainReferee"
                      type="text"
                      onChange={this.inputChangeHandler}
                      className="form-control"
                      id="exampleInputPassword1"
                      value={this.state.ref1}
                      required
                    />
                    <div style={{ fontSize: 12, color: "green" }}>
                      {this.state.ref1error}
                    </div>
                  </div>

                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;First Line Man
              </label>
                  <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    name="twolinesmen[0]"
                    className="form-control"
                    value={this.state.ref2}
                    required
                  />
                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Second Line Man
              </label>
                  <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    name="twolinesmen[1]"
                    className="form-control"
                    value={this.state.ref3}
                    required
                  />

                  <label>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Match Date
              </label>
                  <input
                    type="date"
                    onChange={this.inputChangeHandler}
                    name="Date"
                    className="form-control"
                    value={this.state.date}

                  />
                  <br></br>
                  <br></br><br></br>
                  <button type="submit" className="btn-submit">
                    Save Match
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
      </div>
    );
  }
}

export default Manager;