import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/home";
import "./assets/styles/global.scss";
import CreateUserProfile from "./pages/create-profile";
import NewUserRegistration from "./pages/register-new-user";
import RegisterKnownGenderComponent from "./pages/register-known-gender";
import ExploreJeevanApp from "./pages/explore-app";
import CareerDetails from "./pages/career-details";
import SocialDetails from "./pages/social-details";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login-page";
import LoginDetailsPage from "./pages/login-details";
import LoginWithPasswordPage from "./pages/login-with-password";
import HomePageTabs from "./components/tabs/home-page-tabs/HomePageTabs";
import ProLiteDashBoard from "./pages/upgrade-plan";
import { GlobalContext } from "../context/GlobalContext";
import MembershipUpgradePaymentsPage from "./pages/membership-payment";
import UpgradeMembershipPaymentSuccessPage from "./pages/membership-payment/SuccessPage";

function App() {
  const [selectedTab, setSelectedTab] = useState("matches");
  return (
    <GlobalContext.Provider value={{ selectedTab, setSelectedTab }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-profile" element={<CreateUserProfile />} />
          <Route path="/register" element={<NewUserRegistration />} />
          <Route path="/explore-app" element={<ExploreJeevanApp />} />
          <Route path="/login-details" element={<LoginDetailsPage />} />
          <Route path="/career-details" element={<CareerDetails />} />
          <Route path="/social-details" element={<SocialDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upgrade-plan" element={<ProLiteDashBoard />} />
          <Route path="/upgrade-membership" element={<HomePageTabs />} />
          <Route
            path="/payment-upgrade-success-page"
            element={<UpgradeMembershipPaymentSuccessPage />}
          />
          <Route
            path="/membership-upgrade-payments-page"
            element={<MembershipUpgradePaymentsPage />}
          />
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
    </GlobalContext.Provider>
  );
}

export default App;
