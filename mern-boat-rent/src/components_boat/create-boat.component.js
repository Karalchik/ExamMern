import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBoat extends Component {
  constructor(props){
    super(props);
    this.onChangeModel=this.onChangeModel.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.onChangeLenght=this.onChangeLenght.bind(this);
    this.onChangeCabins=this.onChangeCabins.bind(this);
    this.onChangePersons=this.onChangePersons.bind(this);
    this.onChangeWC=this.onChangeWC.bind(this);
    this.onChangeYear=this.onChangeYear.bind(this);
    this.onChangeWidth=this.onChangeWidth.bind(this);
    this.onChangeEngine=this.onChangeEngine.bind(this);
    this.onChangeBeds=this.onChangeBeds.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      model:'',
      price:0,
      lenght:0,
      cabins:0,
      persons:0,
      WC:0,
      year:0,
      width:0,
      engine:'',
      beds:0,
    };
  }

  onChangeModel(e){
    this.setState({
        model:e.target.value
    });
  }
  onChangePrice(e){
    this.setState({
        price:e.target.value
    });
  }
  onChangeLenght(e){
    this.setState({
        lenght:e.target.value
    });
  }
  onChangeCabins(e){
    this.setState({
        cabins:e.target.value
    });
  }
  onChangePersons(e){
    this.setState({
        persons:e.target.value
    });
  }
  onChangeWC(e){
    this.setState({
        WC:e.target.value
    });
  }
  onChangeYear(e){
    this.setState({
        year:e.target.value
    });
  }
  onChangeWidth(e){
    this.setState({
        width:e.target.value
    });
  }
  onChangeEngine(e){
    this.setState({
        engine:e.target.value
    });
  }
  onChangeBeds(e){
    this.setState({
        beds:e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const newBoat={
        model:this.state.model,
        price:this.state.price,
        lenght:this.state.lenght,
        cabins:this.state.cabins,
        persons:this.state.persons,
        WC:this.state.WC,
        year:this.state.year,
        width:this.state.width,
        engine:this.state.engine,
        beds:this.state.beds,
    };

    console.log(newBoat);

    axios.post('http://localhost:5000/boats/add', newBoat).then(res=>console.log(res.data));
  }

  render() {
    return (
      <h1>Boat</h1>
    )
  }
}