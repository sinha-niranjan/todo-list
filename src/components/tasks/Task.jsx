import React from "react";
import "./style.css";
import { useContext } from "react";
import { data } from "../../App";
import { Button } from "react-bootstrap";
const Task = () => {
  const { val, setVal } = useContext(data);

  const removeTask = (i) => {
    const updatedList = val.filter((element, id) => {
      return i !== id;
    });
    setVal(updatedList);
  };
  return (
    <div div className="task">
      <div className="table">
        <table>
          <thead>
             <tr>
            <th className="serial-number">SI. NO.</th>
            <th className="task-value"> Task name</th>
            <th className="complete-btn">Operation</th></tr>
          </thead>

          <tbody>
            {val &&
              val?.map((data, i) => {
                return (
                   
                     <tr key={i}> 
                      <td className="serial-number"> {i + 1}</td>
                      <td className="task-value"> {val[i]}</td>
                      <td className="complete-btn">
                        <Button
                          variant="success"
                          onClick={() => {
                            removeTask(i);
                          }}
                        >
                          {" "}
                          Complete{" "}
                        </Button>
                      </td>
                      </tr> 
                   
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
