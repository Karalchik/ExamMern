import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"

import CreateUser from "./components_user/create-user.component";
import EditUser from "./components_user/edit-user.component";
import LogInUser from "./components_user/login-user.component";

import CreateRequest from "./components_request/create-request.component";
import DeleteRequest from "./components_request/delete-request.component";
import EditRequest from "./components_request/edit-request.component";

import CreateBoat from "./components_boat/create-boat.component";
import DeleteBoat from "./components_boat/delete-boat.component";
import EditBoat from "./components_boat/edit-boat.component";
import MostPopularBoat from "./components_boat/mostpopular-boat.component";
import SearchBoat from "./components_boat/search-boat.component";
import ViewBoat from "./components_boat/view-boat.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
        <Route path="/" element={<CreateUser />}></Route>
        <Route path="/create_user" element={<CreateUser />}></Route>
        <Route path="/create_request" element={<CreateRequest />}></Route>
        <Route path="/create_boat" element={<CreateBoat />}></Route>
        <Route path="/logIn_user" element={<LogInUser />}></Route>
        </Routes>  
      </div> 
    </Router>
  );
}

export default App;