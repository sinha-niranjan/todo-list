import "./App.css";

import NavBar from "./components/navBar/NavBar";
import Carousel from "./components/carousel/Carousel";
import Body from "./components/body/Body";
import AddTask from "./components/addTask/AddTask";
import Task from "./components/tasks/Task";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const data = createContext();

function App() {
  const [val, setVal] = useState(["Buy some books", "Buy some fruits"]);

  return (
    <>
      <data.Provider value={{ val, setVal }}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {" "}
                    <Carousel /> <Body />
                  </>
                }
              />
              <Route path="/addTask" element={<AddTask />} />
              <Route path="/task" element={<Task />} />
            </Routes>
          </div>
        </BrowserRouter>
      </data.Provider>
    </>
  );
}

export default App;
export { data };
