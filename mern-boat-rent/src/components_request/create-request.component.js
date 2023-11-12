import React, { Component } from 'react';
import axios from 'axios';

export default class CreateRequest extends Component {
  constructor(props){
    super(props);
    this.onChangeBaseprice=this.onChangeBaseprice.bind(this);
    this.onChangeDisciunt=this.onChangeDisciunt.bind(this);
    this.onChangeStartDate=this.onChangeStartDate.bind(this);
    this.onChangeEndDate=this.onChangeEndDate.bind(this);
    this.onChangeOptions=this.onChangeOptions.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      baseprice:0,
      discount:0,
      startdate:new Date(),
      enddate:new Date(),
      options:new Array(),
    };
  }

  onChangeBaseprice(e){
    this.setState({
        baseprice:e.target.value
    });
  }
  onChangeDisciunt(e){
    this.setState({
        discount:e.target.value
    });
  }
  onChangeStartDate(e){
    this.setState({
        startdate:e.target.value
    });
  }
  onChangeEndDate(e){
    this.setState({
        enddate:e.target.value
    });
  }
  onChangeOptions(e){
    this.setState({
        options:e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const newRequest={
        baseprice:this.state.baseprice,
        discount:this.state.discount,
        startdate:this.state.startdate,
        enddate:this.state.enddate,
        options:this.state.options,
    };

    console.log(newRequest);

    axios.post('http://localhost:5000/requests/add', newRequest).then(res=>console.log(res.data));
  }

  render() {
    return (
      <div>
      <h1>Request</h1>
      </div>
    )
  }
}