import React from 'react';
// todo import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import NavbarComp from "./components/navbar.component"
import FooterComp from "./components/footer.component"
import Home from "./components/home.component"
import Payment from "./components/payment.component"
import Profile from "./components/profile.component"
import ScrollTop from "./components/scrolltop.component"

import PageNotFound from "./components/404.component"

import AboutUs from "./components_about/aboutus.component"
import Contact from "./components_about/contact.component"
import FAQ from "./components_about/FAQ.component"

import CreateUser from "./components_user/create-user.component";
import EditUser from "./components_user/edit-user.component";
import LoginUser from "./components_user/login-user.component";
import Help from "./components_user/help-user.component";

import CreateBoat from "./components_boat/create-boat.component";
import EditBoat from "./components_boat/edit-boat.component";
import AdminRentBoat from "./components_boat/admin-rent-boat.component";

import BuyBoat from "./components_boat/buy-boat.component";
import RentBoat from "./components_boat/rent-boat.component";

function App() {
  return (
    <Router>
      <div >
        <br></br>
        <NavbarComp />
        <br></br>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>

        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/create_user" element={<CreateUser />}></Route>
        <Route path="/login_user" element={<LoginUser />}></Route>
        <Route path="/edit_user" element={<EditUser />}></Route>
        <Route path="/help" element={<Help />}></Route>

        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>

        <Route path="/buy_boat/:id" element={<BuyBoat />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/rent_boat" element={<RentBoat />}></Route>

        <Route path="/admin_rent_boat" element={<AdminRentBoat />}></Route>
        <Route path="/create_boat" element={<CreateBoat />}></Route>
        <Route path="/edit_boat/:id" element={<EditBoat />}></Route>
        </Routes>
        <br></br>
        <FooterComp/>
        <br></br>
        <ScrollTop/>
      </div> 
    </Router>
  );
}

export default App;