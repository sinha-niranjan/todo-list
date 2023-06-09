import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import img1 from "../../assets/img/todo.webp";
import img2 from "../../assets/img/todo1.avif";
import img3 from "../../assets/img/todo2.webp";

const Body = () => {
  return (
    <div className="content">
      <div className="main">
        <div className="big-text">Organize Your work and life,finally.</div>
        <div className="small-text">
          Become focused, organized, and calm with Todo List. The world's #1
          task manager and todo list app.
        </div>
        <Button variant="danger" size="lg">
          {" "}
          Start for free{" "}
        </Button>
      </div>
      <div className="image">
        <div className="girl-image">
          <img src={img1} alt="" />
        </div>
        <div className="demo-image">
          <img src={img2} alt="" />
        </div>
        <div className="girl-image">
          <img className="girl-img" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
