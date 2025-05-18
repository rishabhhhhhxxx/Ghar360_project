import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/updateListing";
import Listing from "./pages/Listing";


export default function App() {
  return(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/create-listing" element={<CreateListing />}></Route>
      <Route path="/update-listing/:listingId" element={<UpdateListing />}></Route>
      </Route>
      <Route path="/listing/:listingId" element={<Listing />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

