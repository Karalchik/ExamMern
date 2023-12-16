import { Button, Carousel } from "@material-tailwind/react";
import React, { Component } from 'react';
import axios from '../http-common';
export default class ViewBoat extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { boats: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/boats/').then(response => {
      this.setState({ boats: response.data });
    }).catch((error) => {
      console.log(error);
    })
  }
  onSubmit(_id) {
    window.location="/buy_boat/"+_id;
  }
  render() {
    return (
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-12 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {this.state.boats.map(({ _id,image }, index) => (
          <div>
            <img
              src={image}
              alt={"image" + (index + 1)}
              className="w-full"
              style={{width:"900px",height:"600px",float: "left"}}
            />
            <Button name="For_Id" id={_id} fullWidth onClick={()=>this.onSubmit(_id)} variant="gradient" color="blue">
              More Information
            </Button>
          </div>
        ))}
      </Carousel>
    );
  }
}