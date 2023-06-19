import React from 'react';
import './Sidebar.css'
import image1 from '../../Images/Group 7.png';
import homeImage from '../../Images/category.jpg';
import messageImage from '../../Images/message.png';
import tasksImage from '../../Images/task-square.png';
import membersImage from '../../Images/profile-2user.png';
import SettingImage from '../../Images/setting-2.png';
import addSquare from '../../Images/add-square.png';
import bulb from '../../Images/Vector.png'

import sidebartoggle from '../../Images/Group 639.png'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="top">
          <div style={{ display: "flex" }}>
            <img src={image1} alt="" />
            <h2>Project M.</h2>
          </div>
          <div style={{ width: "30px" }}>
            <img src={sidebartoggle} alt="" />
          </div>
        </div>
        <hr />
        <div className="middle">
          <div className="each">
            <img src={homeImage} alt="" />
            <p>Home</p>
          </div>
          <div className="each">
            <img src={messageImage} alt="" />
            <p>Message</p>
          </div>
          <div className="each">
            <img src={tasksImage} alt="" />
            <p>Tasks</p>
          </div>
          <div className="each">
            <img src={membersImage} alt="" />
            <p>Members</p>
          </div>
          <div className="each">
            <img src={SettingImage} alt="" />
            <p>Settings</p>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <div className="each">
            <h3>MY PROJECTS</h3>
            <img src={addSquare} alt="" />
          </div>
          <ul>
            <li>
              <NavLink to="/MercorProject/">Mobile App</NavLink>
            </li>
            <li>
              <NavLink to="/MercorProject/website-redesign">
                Website Redesign
              </NavLink>
            </li>
            <li>
              <NavLink to="/MercorProject/design-system">Design System</NavLink>
            </li>
            <li>
              <NavLink to="/MercorProject/wireframe">Wireframes</NavLink>
            </li>
          </ul>
        </div>
        <div className="qoute">
          <div className="bulb">
            <img src={bulb} alt="" />
          </div>
          <div className="data">
            <h5>Thoughts Time</h5>
            <p>
              We don't have any notice for you,till then you can share your
              thoughts with your peers.
            </p>
            <input type="text" placeholder="Write a message" />
          </div>
        </div>
      </div>
    );
}

export default Sidebar;