import React, { Component } from 'react';
import axios from '../http-common';
import Icon from "../components/icon.component";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAgree = this.onAgree.bind(this);

    this.state = {
      username: '',
      contacts: '+380000000000',
      email: '',
      history: [],
      password: '',
      isadmin: false,
      text: '',
      isAgree: false,
    };
  }

  onAgree(e) {
    this.setState({
      onAgree: e.target.value
    });
  }
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onCheckShow() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.validateEmail(this.state.email)) {
      this.setState({
        text: ""
      });
      const newUser = {
        username: this.state.username,
        contacts: this.state.contacts,
        email: this.state.email,
        history: this.state.history,
        password: this.state.password,
        isadmin: this.state.isadmin,
      };

      axios.post('users/add', newUser).then(res =>{
      axios.post('users/login',newUser).then(res=>{
        if(res.data.Login){
          this.setState({
            text:""
          });
          window.location="/profile";
        }
      })
      window.location="/profile";});
    }  
  }

  render() {
    return (
      <div class="container mx-auto px-4 rounded-3xl bSty heightTo backimgInUp centered" style={{ textAlign: "center", height: "790px" }}>
        <Card color="transparent" shadow={false} >
          <Typography variant="h4" className="text-light-blue-500">
            Sign Up
          </Typography>
          <Typography color="white" className="mt-1 font-normal text-white">
            Nice to meet you! Enter your details to register.
          </Typography>
          <center>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Username"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
                <Typography variant="h6" className="-mb-3 text-light-blue-300">
                  Your Email
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
              <div class="inline-flex items-center">
                <Checkbox text-light-blue-300 color="blue"
                  label={
                    <Typography
                      variant="small"
                      color="white"
                      className="mr-3 flex items-center font-small">
                      Show Password
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  onClick={() => this.onCheckShow()}
                />
                <Checkbox color="blue" onChange={this.onAgree}
                  label={
                    <Typography
                      variant="small"
                      color="white"
                      className="flex items-center font-small"
                    >
                      I agree the
                      <a
                        href="/terms"
                        className="font-medium transition-colors hover:text-light-blue-300 text-teal-700"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
              </div>
              <Button className="mt-6" fullWidth onClick={this.onSubmit} variant="gradient" color="blue">
                sign up
              </Button>
              <Typography color="white" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="login_user" className="font-medium text-light-blue-300">
                  Sign In
                </a>
              </Typography>
            </form></center>
        </Card>
      </div>
    )
  }
}