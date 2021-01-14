import React, { Component } from 'react';
import ".Signup/Signup.css";
import swal from "sweetalert";


const initialState = {

  password: "",
  firstname: "",
  lastname: "",
  birthdate: "",
  gender:"",
  city:"",
  address:"",
  role:"",

};


class EditInfo extends Component {
constructor(props) {
        super(props);
    
      }
  state = initialState;

  inputChangeHandler = (e) => {
    
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(name,value);
  };


  formSubmitHandler = (e) => {
    // const isValid = this.validate();
    // if (isValid) {
 
      console.log(this.state.password);
      console.log(this.state.firstname);
      console.log(this.state.lastname)
      console.log(this.state.birthdate);
      console.log(this.state.gender);
      console.log(this.state.city);
      console.log(this.state.address);
      console.log(this.state.role);
      //clear form
      this.setState(initialState);
   // }


    let thisState = this;
    let stateaccess = this.state;
    alert(JSON.stringify(this.state));
    fetch("http://localhost:3000/user/" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        birthdate: this.state.birthdate,
        gender:this.state.gender,
        city:this.state.city,
        address:this.state.address,
        role:this.state.role,
      }),
    })
      .then(function (callback) {
        if (callback.status===200)
        {
          console.log(callback.json());
          alert("Submitted Successfully!");
        }
        else
        {
          alert("Wrong Submission!");
        }

       
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    this.setState({

      password: "",
      firstname: "",
      lastname: "",
      birthdate: "",
      gender:"",
      city:"",
      address:"",
      role:"",
    });
  };
     

  render() {
    return (
      <div>
      <Navbar/>
      <div className="e">
      <br></br>
      Data from parent is:{localStorage.username}
      <div className="signup-main mt-1 mb-3 p-" >
        <br></br>
        <div className="signup-box-form">
        <div className="container">
          <form onSubmit={this.formSubmitHandler}>


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
                
              />
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
                placeholder="Enter new firstname"
                
              />
              <label>
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Lastname
              </label>
              <input
                type="text"
                onChange={this.inputChangeHandler}
                name="lastname"
                className="form-control"
                placeholder="Enter new lastname"
                value={this.state.lastname}
                
              />

              <label>
                <i class="fa fa-user" aria-hidden="true"></i>&nbsp;Birthdate
              </label>
              <input
                type="date"
                onChange={this.inputChangeHandler}
                name="birthdate"
                className="form-control"
                placeholder="Enter new birthdate"
                value={this.state.birthdate}

              />
              <br></br>
              <label>
                <i class="fa fa-user" aria-hidden="true"></i>Gender&nbsp; 
              </label>
              <input type="radio" name="gender" className="form-control" value="male" onChange={this.inputChangeHandler} />Male 
              <input type="radio" name="gender" className="form-control" value="female" onChange={this.inputChangeHandler}/> Female 
              <br></br>
              <label >City: </label>           
                <select  name="city" className="form-control" onChange={this.inputChangeHandler}>
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
              <input type="radio" name="role"className="form-control" value="fan" onChange={this.inputChangeHandler}/> Fan 
              <br></br><br></br>
            <button type="submit" className="btn-submit">
              Save Changes
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
      </div> );
  }
}

export default EditInfo;