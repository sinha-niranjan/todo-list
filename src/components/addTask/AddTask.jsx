import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { data } from "../../App";

const AddTask = () => {
  const { val, setVal } = useContext(data);

  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTask = [...val, task];
    setVal(allTask);
    setTask("");
  };

  return (
    <div className="addTask">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="danger" size="lg" onClick={handleSubmit}>
          {" "}
          Add{" "}
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
