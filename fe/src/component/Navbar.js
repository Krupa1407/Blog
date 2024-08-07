import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

  // logout
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  }






  const handleCategoryChange = (newCategory) => {
    navigate(`/category/${newCategory}`); // Redirect to the specific category page
  }

  const handleCountryChange = (newCountry) => {
    navigate(`/country/${newCountry}`); // Redirect to the specific category page
  }









  return (
    <div>
      <ul className='nav-ul'>
        <div className="nav-right">



          {auth ?
            // login/ signed up
            <div className='nav-right'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>

              {/* category */}
              <Dropdown style={{ display: "inline", padding: "1vh" }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryChange("mountain")}>Mountain</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryChange("beach")}>Beach</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryChange("forest")}>Forest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* country */}
              <Dropdown style={{ display: "inline", padding: "1vh" }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Country
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCountryChange("usa")}>USA</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCountryChange("switzerland")}>Switzerland</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCountryChange("peru")}>Peru</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/addblog">Addblog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link onClick={logout} to="/">Logout [{JSON.parse(auth).name}]</Link></ li>




            </div>

            :
            // not login
            <div className="nav-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </div>
          }

        </div>
      </ul>




    </div>
  )
}

export default Navbar
