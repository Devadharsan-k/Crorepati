import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { moneyPyramid } from "../../moneyPyramid";

const Navbar = ({ setMoneyLevel, moneyLevel }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleChange = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <button onClick={handleChange}>
          <FaBars />
        </button>
      </div>
      <nav className={`nav-menu ${sidebar ? "active" : ""}`}>
        <div className="icon" onClick={handleChange}>
          <RxCross1 size={25} />
        </div>
        <div className="moneyList">
          <div>
            <ul>
              {moneyPyramid.map((item) => (
                <li
                  key={item.id}
                  className={moneyLevel === item.id ? "list active" : "list"}
                >
                  <span>{item.id}</span>
                  <span>{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
