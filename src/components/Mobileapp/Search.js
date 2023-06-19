import React from 'react';
import search from '../../Images/search-normal.png'
import "./Mobileapp.css";
import calender from '../../Images/Group 640.png'
import profile from '../../Images/image 1.png'


function Search() {
    return (
      <div className="search">
        <div className="left">
          <input type="text" name="" id="" placeholder="Search for anything" />
          <img src={search} alt="" />
        </div>
        <div className="right">
          <div>
            <img src={calender} alt="" />
          </div>
          <div className="profile">
            <p>
              Anima Agrawal <br />
              U.P,India
            </p>
            <div>
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Search