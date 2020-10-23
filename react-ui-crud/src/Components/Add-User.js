import React, { Component } from "react";
import UserDataService from "../Services/user.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDocument = this.onChangeDocument.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
      document: "", 
      phone: "",

      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDocument(e) {
    this.setState({
      document: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  saveUser() {
    var user = {
      name: this.state.name,
      email: this.state.email,
      document: this.state.document,
      phone: this.state.phone,
    };

    UserDataService.create(user)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          document: response.data.document,
          email: response.data.email,
          phone: response.data.phone,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      name: "",
      document: "",
      email: "",
      phone: "",

      submitted: false
    });
  }

    render() {
      return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newUser}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="document">Document</label>
                <input
                  type="text"
                  className="form-control"
                  id="document"
                  required
                  value={this.state.document}
                  onChange={this.onChangeDocument}
                  name="document"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                  name="phone"
                />
              </div>
  
              <button onClick={this.saveUser} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }  
