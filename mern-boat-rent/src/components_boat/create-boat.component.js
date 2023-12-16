import React, { Component } from 'react';
import axios from '../http-common';
import { Button, Card, Typography, Input } from "@material-tailwind/react";

export default class CreateBoat extends Component {
  constructor(props) {
    super(props);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeBaseprice = this.onChangeBaseprice.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeLenght = this.onChangeLenght.bind(this);
    this.onChangeCabins = this.onChangeCabins.bind(this);
    this.onChangePersons = this.onChangePersons.bind(this);
    this.onChangeWC = this.onChangeWC.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeWidth = this.onChangeWidth.bind(this);
    this.onChangeEngine = this.onChangeEngine.bind(this);
    this.onChangeBeds = this.onChangeBeds.bind(this);
    this.onChangeIsUsing = this.onChangeIsUsing.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      model: '',
      image: '',
      baseprice: 0,
      discount: 0,
      length: 0,
      cabins: 0,
      persons: 0,
      WC: 0,
      year:2000,
      width: 0,
      engine: '',
      beds: 0,
      isUsing: false,
    };
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }
  onChangeBaseprice(e) {
    this.setState({
      baseprice: e.target.value
    });
  }
  onChangeDiscount(e) {
    this.setState({
      discount: e.target.value
    });
  }
  onChangeLenght(e) {
    this.setState({
      length: e.target.value
    });
  }
  onChangeCabins(e) {
    this.setState({
      cabins: e.target.value
    });
  }
  onChangePersons(e) {
    this.setState({
      persons: e.target.value
    });
  }
  onChangeWC(e) {
    this.setState({
      WC: e.target.value
    });
  }
  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }
  onChangeWidth(e) {
    this.setState({
      width: e.target.value
    });
  }
  onChangeEngine(e) {
    this.setState({
      engine: e.target.value
    });
  }
  onChangeBeds(e) {
    this.setState({
      beds: e.target.value
    });
  }
  onChangeIsUsing(e) {
    this.setState({
      isUsing: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const boat = {
      model: this.state.model,
      image: this.state.image,
      baseprice: this.state.baseprice,
      discount: this.state.discount,
      length: this.state.length,
      cabins: this.state.cabins,
      persons: this.state.persons,
      WC: this.state.WC,
      year: this.state.year,
      width: this.state.width,
      engine: this.state.engine,
      beds: this.state.beds,
      isUsing: this.state.isUsing,
    };

    console.log(boat);

    axios.post('http://localhost:5000/api/boats/add/', boat)
      .then(res => console.log(res.data));
      window.location="/admin_rent_boat";
  }

  render() {
    return (
      <div class="container mx-auto px-4 rounded-3xl bSty heightTo backimgCreateBoat centered">
        <Typography variant="h3" className="text-light-blue-500 text-center">
          Creating Page
        </Typography>
        <form className="mb-4 flex flex-col justify-center gap-8 md:flex-row md:items-center" style={{ maxWidth: "500px" }}>
          <div className="mb-1 text-center centered2">
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Model
              </Typography>
              <Input
                size="lg"
                placeholder="model"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.model}
                onChange={this.onChangeModel}
              />
              <Typography variant="h6" className="text-light-blue-300">
                Image
              </Typography>
              <Input
                size="lg"
                placeholder="image"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.image}
                onChange={this.onChangeImage}
              />
            </div>
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Price
              </Typography>
              <Input
                size="lg"
                placeholder="1000"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.baseprice}
                onChange={this.onChangeBaseprice}
              />
              <Typography variant="h6" className="text-light-blue-300">
                Discount
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.discount}
                onChange={this.onChangeDiscount}
              />
            </div>
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Length
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.length}
                onChange={this.onChangeLenght}
              />
              <Typography variant="h6" className="text-light-blue-300">
                Cabins
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.cabins}
                onChange={this.onChangeCabins}
              />
            </div>
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Persons
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.persons}
                onChange={this.onChangePersons}
              />
              <Typography variant="h6" className="text-light-blue-300">
                WC
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.WC}
                onChange={this.onChangeWC}
              />
            </div>
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Year
              </Typography>
              <Input
                size="lg"
                placeholder="2023"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.year}
                onChange={this.onChangeYear}
              />
              <Typography variant="h6" className="text-light-blue-300">
                Width
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.width}
                onChange={this.onChangeWidth}
              />
            </div>
            <div style={{ float: "left", margin: "5px", width: "45%" }}>
              <Typography variant="h6" className="text-light-blue-300">
                Engine
              </Typography>
              <Input
                size="lg"
                placeholder="engine"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.engine}
                onChange={this.onChangeEngine}
              />
              <Typography variant="h6" className="text-light-blue-300">
                Beds
              </Typography>
              <Input
                size="lg"
                placeholder="0"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={this.state.beds}
                onChange={this.onChangeBeds}
              />
            </div>
            <div class="centered" style={{ margin: "1em", float: "left", width: "500px" }}>
              <Button className="mt-6" fullWidth onClick={this.onSubmit} variant="gradient" color="blue">
                Create
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }

}