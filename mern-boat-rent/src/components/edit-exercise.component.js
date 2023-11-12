import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
  //     .then(response => {
  //       this.setState({
  //         username: response.data.username,
  //         description: response.data.description,
  //         duration: response.data.duration,
  //         date: new Date(response.data.date)
  //       })   
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  //   axios.get('http://localhost:5000/users/')
  //     .then(response => {
  //       this.setState({ users: response.data.map(user => user.username) });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}