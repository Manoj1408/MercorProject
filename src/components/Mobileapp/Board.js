import React from "react";
import Card from "./Card";
import "./Mobileapp.css";

function Board({ cards, handleDragEnd, handleDragEnter }) {
  // let title = cards.title;
  // console.log(cards);
  const getBackgroundColor = (title) => {
    switch (title) {
      case "To Do":
        return "#5030E5";
      case "On Process":
        return "#FFA500";
      case "Done":
        return "#8BC48A";
      default:
        return "blue";
    }
  };

  const cardStyle = {
    backgroundColor: getBackgroundColor(cards.title),
    // padding: "5px",
    height: "2px",
    width: "90%",
  };
  return (
    <>
      <div className="cards">
        <div className="head">
          <h3>{cards.title}</h3>
          <p>{cards.cards.length}</p>
        </div>
        <hr style={cardStyle} />
        <div className="onlycards">
          {cards.cards &&
            cards.cards.map((each) => (
              <Card
                each={each}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                boardId={cards.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Board;
