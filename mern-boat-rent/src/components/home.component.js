import React, { Component } from 'react';
import { Spinner } from "@material-tailwind/react";
import './home.component.css';
import ViewBoat from "../components_boat/view-boat.component";

export default class EditUser extends Component {
constructor(props){
    super(props);

    this.state={
    };
}

render() {
    return (
        <div class="container mx-auto px-4 rounded-3xl">
        <div class="backimg bSty">
        <div class="intro">
            <h1>Blue Shell</h1>
            <p>This is a site for your own dreams witch you can take there.</p>
            <button onClick={()=>{window.location='/boatrent'}}>Rent your Dream!</button>
        </div>
        <div class="wimg">
        <div class="achievements">
            <div class="work">
                <Spinner color="pink" className="h-8 w-8"/>
                <p class="work-heading">Imagine</p>
                <p class="work-text">We can procide you a lot of our boats to try and you also can spend time with it</p>
            </div>
            <div class="work">
                <Spinner color="pink" className="h-8 w-8"/>
                <p class="work-heading">Preview</p>
                <p class="work-text">We can show you boat of your dreams in real time, you need only to start renting it.</p>
            </div>
            <div class="work">
                <Spinner color="pink" className="h-8 w-8"/>
                <p class="work-heading">Take</p>
                <p class="work-text">We have a lot of discounts in our rent company, all people can purchase some boats.</p>
            </div>
        </div>
        <br/>
        <ViewBoat/>
        <br/>
        <div class="about-me">
            <div class="about-me-text">
                <h2>History of Our Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit et leo at luctus. Vestibulum arcu dui, aliquam id sapien vitae, porta laoreet ante. Aliquam sem mauris, porttitor vehicula libero sit amet, convallis sodales metus. Nullam malesuada condimentum odio, non maximus lacus tempor a. Morbi pulvinar molestie purus, vitae sagittis odio tristique nec. Proin eu finibus ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non arcu ex. Proin congue dui sit amet massa viverra auctor. In hac habitasse platea dictumst. Nam gravida placerat nunc, quis iaculis risus tempor eleifend. Praesent et tempus risus, vitae porttitor libero. Pellentesque sit amet lobortis sapien. Vivamus accumsan odio sit amet porta ultricies. Maecenas ut urna ut felis accumsan fermentum ut non justo. Donec pretium leo eget ex consectetur bibendum. Praesent in ipsum iaculis, egestas ante eu, imperdiet lacus. Cras volutpat varius pretium.</p>
            </div>
        </div>
        </div>
    </div></div>
    )
    }
}
