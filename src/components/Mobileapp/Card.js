import React from "react";
import dots from "../../Images/_. ..png";
import people from "../../Images/Group 633.png";
import files from "../../Images/Group 628.png";
import comment from "../../Images/message.png";

function Card({ each, handleDragEnd, handleDragEnter, boardId }) {
  // console.log(each);
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => handleDragEnd(each.id, boardId)}
      onDragEnter={() => handleDragEnter(each.id, boardId)}
    >
      <div className="status">
        <div
          style={{
            backgroundColor: "rgba(223, 168, 116, 0.2)",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {each.status}
        </div>
        <div>
          <img src={dots} alt="" />
        </div>
      </div>
      <h5>{each?.title}</h5>
      <p>{each?.content}</p>
      <div className="imge">
        {each.images &&
          each.images.map((p) => {
            // console.log(p.Image);
            return <img src={p.Image} alt="" />;
          })}
      </div>

      <div className="comments">
        <div>
          <img src={people} alt="" />
        </div>
        <div className="files">
          <div>
            <img src={comment} alt="" />
            <p>{each.comments} comments</p>
          </div>
          <div>
            <img src={files} alt="" />
            <p>{each.file} files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
