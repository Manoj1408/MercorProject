import React, { useState } from 'react';
import edit from '../../Images/arrow-square-up.png';
import share from '../../Images/Group 626.png';
import "./Mobileapp.css";
import add from '../../Images/add-square.png';
import all from '../../Images/Group 642.png';
import filter from '../../Images/Group 647.png';
import shareall from '../../Images/Group 617.png';
import Board from './Board';
import onimage from '../../Images/unsplash_MicqqGyDQ6w.png';
import on1image1 from '../../Images/unsplash_BS_1XGRkIH4.png';
import on1image2 from '../../Images/unsplash_KIqJfzbII9w.png';
import on2image1 from '../../Images/Plant Care App (Dribbble shot) 1.png';
import Search from './Search';
import filtericon from '../../Images/filter.png'
import calender from '../../Images/calendar.png';



function Mobileapp() {
  
  
  const [boards, setBoards] = useState([
    {
      id: 0,
      title: "To Do",
      cards: [
        {
          id: 0,
          status: "Low",
          title: "Brainstorming",
          content:
            "Brainstorming brings team members diverse experience into play",
          people: "",
          comments: 12,
          file: 0,
        },
        {
          id: 1,
          status: "High",
          title: "Research",
          content:
            "User reseacrh helps you to create an optimal producet for users",
          people: "",
          comments: 10,
          file: 3,
        },
        {
          id: 2,
          status: "High",
          title: "Wireframes",
          content:
            "Low fidelity wireframes includes the most basic content and visuals",
          people: "",
          comments: 11,
          file: 4,
        },
      ],
    },
    {
      id: 1,
      title: "On Process",
      cards: [
        {
          id: 0,
          status: "Low",
          title: "Onboarding Illustrations",
          images: [
            {
              id: 0,
              Image: onimage,
            },
          ],
          people: "",
          comments: 14,
          file: 15,
        },
        {
          id: 1,
          status: "Low",
          title: "Moodboard",
          images: [
            {
              id: 0,
              Image: on1image1,
            },
            {
              id: 1,
              Image: on1image2,
            },
          ],
          people: "",
          comments: 9,
          file: 10,
        },
      ],
    },
    {
      id: 2,
      title: "Done",
      cards: [
        {
          id: 0,
          status: "Completed",
          title: "Mobile App Design",
          images: [
            {
              id: 0,
              Image: on2image1,
            },
          ],
          people: "",
          comments: 12,
          file: 15,
        },
        {
          id: 1,
          status: "Completed",
          title: "Design System",
          content: "It just needs to adapt the UI from what you did before",
          people: "",
          comments: 12,
          file: 15,
        },
      ],
    },
  ]);
 const [selectedValue, setSelectedValue] = useState("");
 const [selectedValue1, setSelectedValue1] = useState("");
  console.log(selectedValue);
  // console.log(board);
  const[target,setTarget] = useState({
    cid:"",
    bid:""
  });

  const handleDragEnter=(cid,bid) => {
    // console.log("drag started")
    console.log(cid, bid);
    setTarget({
      cid,bid
    })

  } 

  const handleDragEnd = (cid, bid) => {
    console.log(cid,bid)
    let s_bIndex,s_cIndex,t_bIndex,t_cIndex

    s_bIndex = boards.findIndex(item =>item.id ===bid)
    if(s_bIndex<0)return;

    s_cIndex = boards[s_bIndex].cards?.findIndex(item => item.id===cid)
    if(s_cIndex<0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (s_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards?.findIndex((item) => item.id === target.cid);
    if (s_cIndex < 0) return;


     const tempBoards = [...boards];
     const tempCard = tempBoards[s_bIndex].cards[s_cIndex];
     tempBoards[s_bIndex].cards.splice(s_cIndex,1);
     tempBoards[t_bIndex].cards.splice(t_cIndex,0,tempCard);
     setBoards(tempBoards);


  };

  return (
    <div className="mobileapp">
      <div>
        <Search />
        <hr />
      </div>
      <div className="top">
        <div className="heading">
          <h1>Mobile App</h1>
          <img src={edit} alt="" />
          <img src={share} alt="" />
        </div>
        <div className="details">
          <img src={add} alt="noImage" style={{ height: "20px" }} />
          <p style={{ color: "blue" }}>invite</p>
          <img src={all} alt="noimage" />
        </div>
      </div>
      <div className="filter">
        {/* <img src={filter} alt="noimage" /> */}
        <div className="dropdown">
          <div className="filter1">
            <select
              name="list"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="">Filter</option>
              <option value="To Do">To Do</option>
              <option value="On Process">On Process</option>
              <option value="Done">Done</option>
            </select>
            <img src={filtericon} alt="" />
          </div>
          <div className="filter2">
            <select
              name="list"
              value={selectedValue1}
              onChange={(e) => setSelectedValue1(e.target.value)}
            >
              <option value="">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="2days back">2days back</option>
              <option value="3days back">3days back</option>
            </select>
            <img src={calender} alt="" />
          </div>
        </div>

        <img src={shareall} alt="noimage" />
      </div>

      <div className="boards">
        {boards &&
          boards.map((item) => (
            <Board
              cards={item}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
      </div>
    </div>
  );
}

export default Mobileapp