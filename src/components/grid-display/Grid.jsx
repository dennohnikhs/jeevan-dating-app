import React from "react";
import { Link } from "react-router-dom";
import { User, Users } from "react-feather"; // Import the icons you need

const GridDisplay = () => {
  const gridItems = [
    { id: 1, icon: <User />, name: "Self", link: "/register" },
    { id: 2, icon: <User />, name: "Relative", link: "/register" },
    { id: 3, icon: <User />, name: "Son", link: "/register/specific-gender" },
    {
      id: 4,
      icon: <User />,
      name: "Daughter",
      link: "/register/specific-gender",
    },
    {
      id: 5,
      icon: <User />,
      name: "Brother",
      link: "/register/specific-gender",
    },
    {
      id: 6,
      icon: <User />,
      name: "Sister",
      link: "/register/specific-gender",
    },
    {
      id: 6,
      icon: <User />,
      name: "Client(Marriage bureau)",
      link: "/register",
    },
    { id: 6, icon: <User />, name: "Friend", link: "/register" },
    // Add more grid items as needed
  ];

  return (
    <div className="grid grid-cols-2 gap-0.5 bg-slate-200 hover:bg-ja-red">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center flex-col justify-center py-16  bg-ja-gray"
        >
          <Link to={item.link}>
            <div>{item.icon}</div>
          </Link>
          <div className="mt-2">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GridDisplay;
