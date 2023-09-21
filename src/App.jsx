import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./assets/styles/global.scss";
import CreateUserProfile from "./pages/create-profile";
import NewUserRegistration from "./pages/RegisterNewUser";
import RegisterKnownGenderComponent from "./pages/RegisterKnownGender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-profile" element={<CreateUserProfile />} />
        <Route path="/register" element={<NewUserRegistration />} />
        <Route
          path="/register/specific-gender"
          element={<RegisterKnownGenderComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
