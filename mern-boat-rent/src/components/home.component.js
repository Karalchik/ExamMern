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
            <button onClick={()=>{window.location='/rent_boat'}}>Rent your Dream!</button>
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
                <p>The story of your company’s evolution may seem uninspiring to you, but it can play an important role in building trust and respect, especially among younger generations of employees and customers — Gen Zs deeply care about an organization’s background and impact. 
Every company has been shaped by moments of inspiration, perseverance, courage or luck.  Your company history should feature the most compelling highlights of your entrepreneurial journey, along with significant achievements, such as patents and major wins.
You should include your history in your business plan and employee handbook and on your website’s “about us” page. Some companies write a book about their corporate story that is presented to employees and others on special occasions. The message behind your corporate milestones can become your brand’s cornerstone.</p>
            </div>
        </div>
        </div>
    </div></div>
    )
    }
}
