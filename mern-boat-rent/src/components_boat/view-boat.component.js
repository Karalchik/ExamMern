import { Carousel } from "@material-tailwind/react";
import React, { Component } from 'react';
import axios from '../http-common';
export default class ViewBoat extends Component{

    constructor(props){
        super(props);
        this.state={boats:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/boats/').then(response=>{
          this.setState({boats:response.data});
        }).catch((error)=>{
          console.log(error);
        })
      }
  render(){return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {this.state.boats.map(({image}, index) => (
        <img
        src={image}
        alt={"image"+(index+1)}
        className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
}