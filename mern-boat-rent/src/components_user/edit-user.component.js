import React, { Component } from 'react';
import Icon from "../components/icon.component";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import axios from '../http-common';
import "../components/home.component.css"

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeContacts = this.onChangeContacts.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      is: '',
      username: '',
      email: '',
      contacts: '',
      history: [],
      password: '',
      isadmin: false,
      text: '',
      users: [],
    };
  }
  componentDidMount() {
    axios.get('users/auth', {
      withCredentials: true,
    }).then(res => {
      if (res.data.valid) {
        this.setState({
          id: res.data.user._id,
          username: res.data.user.username,
          email: res.data.user.email,
          contacts: res.data.user.contacts,
          password: res.data.user.password,
          history: res.data.user.history,
          isadmin: res.data.user.isadmin,
        })
      }
      else {
        window.location="login_user";
      }
    })

    axios.get('users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.model) });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeEmail(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  onChangeContacts(e) {
    this.setState({
      contacts: e.target.value
    });
  }
  onCheckShow(e) {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      contacts: this.state.contacts,
      history: this.state.history,
      password: this.state.password,
      isadmin: this.state.isadmin,
    };

    axios.post('users/update/' + this.state.id, user)
      .then(res => {
        axios.post('users/login',this.state);
        if (this.validateEmail(this.state.email)) {
          this.setState({
            text: ""
          });
          window.location="/profile";
        }
        else {
          this.setState({
            text: "Your email is incorrect"
          });
        }
      });
  }

  render() {
    return (
      <div class="container mx-auto px-4 rounded-3xl bSty heightTo backimgEditProf centered" style={{ textAlign: "center", height: "790px" }}>
        <Card color="transparent" shadow={false} >
          <Typography variant="h3" className="text-light-blue-500">
            Updating Page
          </Typography>
          <Typography className="mt-1 font-normal text-white">
            Hello again! There you can edit or update your profile.
          </Typography>
          <center>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="username"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="email@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Phone Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="+380000000000"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={this.state.contacts}
                  onChange={this.onChangeContacts}
                />
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  id="password"
                />
                {this.state.text !== "" ? <Alert className='text-sm h-7.5 p-1 bg-orange-700 text-deep-orange-50' variants="gradient" icon={<Icon />}>{this.state.text}</Alert> : null}
              </div>
              <div>
                <Checkbox color="blue"
                  label={
                    <Typography
                      variant="small"
                      color="white"
                      className="flex items-center font-small">
                      Show Password
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  onClick={() => this.onCheckShow()}
                />
              </div>
              <Button className="mt-6" fullWidth onClick={this.onSubmit} variant="gradient" color="blue">
                Update
              </Button>
              <Typography color="white" className="mt-4 text-center font-normal">
                Don't want to edit?{" "}
                <a href="profile" className="font-medium text-light-blue-300">
                  My Profile
                </a>
              </Typography>
            </form></center>
        </Card>
      </div>
    )
  }
}