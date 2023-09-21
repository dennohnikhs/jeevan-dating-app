import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./assets/styles/global.scss";
import CreateUserProfile from "./pages/create-profile";
import NewUserRegistration from "./pages/RegisterNewUser";
import RegisterKnownGenderComponent from "./pages/RegisterKnownGender";
import ExploreJeevanApp from "./pages/explore-app";
import { LogIn } from "react-feather";
import CareerDetails from "./pages/career-details";
import SocialDetails from "./pages/social-details";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-profile" element={<CreateUserProfile />} />
        <Route path="/register" element={<NewUserRegistration />} />
        <Route path="/explore-app" element={<ExploreJeevanApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/social-details" element={<SocialDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/register/specific-gender"
          element={<RegisterKnownGenderComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
