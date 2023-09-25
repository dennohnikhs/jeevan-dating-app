import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/home";
import "./assets/styles/global.scss";
import CreateUserProfile from "./pages/create-profile";
import NewUserRegistration from "./pages/register-new-user";
import RegisterKnownGenderComponent from "./pages/register-known-gender";
import ExploreJeevanApp from "./pages/explore-app";
import CareerDetails from "./pages/career-details";
import SocialDetails from "./pages/social-details";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login-page";
import LoginDetailsPage from "./pages/login-details";
import LoginWithPassword from "./pages/login-with-password";
import SearchPartnerTabs from "./components/tabs/ExploreApp";
import LoginWithPasswordPage from "./pages/login-with-password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-profile" element={<CreateUserProfile />} />
        <Route path="/register" element={<NewUserRegistration />} />
        <Route path="/explore-app" element={<ExploreJeevanApp />} />
        <Route path="/login-details" element={<LoginDetailsPage />} />
        <Route path="/career-details" element={<CareerDetails />} />
        <Route path="/social-details" element={<SocialDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/login-with-password"
          element={<LoginWithPasswordPage />}
        />

        <Route
          path="/register/specific-gender"
          element={<RegisterKnownGenderComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
