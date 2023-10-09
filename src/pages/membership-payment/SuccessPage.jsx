import React, { useState, useEffect } from "react";
import { ArrowLeft, Mail } from "react-feather";
import { Link } from "react-router-dom";

function UpgradeMembershipPaymentSuccessPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <style>
        {`
        @keyframes mailboxAnimation {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .mailbox {
          animation: mailboxAnimation 3s infinite;
        }
        `}
      </style>
      <div className="py-5 px-3 bg-white text-xl font-poppins flex flex-row justify-between text-blue-900 shadow-md">
        <Link to="/membership-upgrade-payments-page">
          <ArrowLeft />
        </Link>
        <h3 className="text-3xl text-red-600 font-extrabold font-aushan">
          Jeevansathi
        </h3>
        <Link className="text-blue-900 text-sm font-poppins font-bold"></Link>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center h-screen px-4">
        <div className={`mailbox ${isOpen ? "animate-mailbox" : ""}`}>
          <Mail className="text-red-600 text-5xl" size={100} />
        </div>
        <h1 className="text-center text-lg">
          Continue payment using the link we sent to your email ID/SMS or
          through our jeevansathi.com website
        </h1>
      </div>
    </div>
  );
}

export default UpgradeMembershipPaymentSuccessPage;
