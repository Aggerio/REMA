import ResturantNavbar from "../components/RestaurantNavbar";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { useState } from "react";

export default function OrderManagement() {
  let [tasks, setTasks] = useState([
    { name: "1", stage: 0 },
    { name: "2", stage: 1 },
  ]);

  let [stagesNames, setStagesNames] = useState([
    "Backlog Orders",
    "To Do Orders",
    "Ongoing Orders",
    "Finished Orders",
  ]);

  let stagesTasks = [];
  for (let i = 0; i < stagesNames.length; ++i) {
    stagesTasks.push([]);
  }
  for (let task of tasks) {
    const stageId = task.stage;
    stagesTasks[stageId].push(task);
  }
  const [taskName, setTaskName] = useState("");
  function handleTaskChange(event) {
    event.preventDefault();

    setTaskName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(taskName);
    if (taskName !== "") {
      setTasks([...tasks, { name: taskName, stage: 0 }]);
    }
  }

  function arrowBack(task, stageIndex, taskIndex) {
    // console.log("Got: ",task);
    tasks.map((item, index) => {
      if (item.name === task.name) {
        let st = item["stage"];
        if (st != 0) {
          let newList = [...tasks];
          // const stageindex= stagesTasks[st].indexOf({name: task.name, stage:st});
          newList.splice(index, 1);
          let n = [...tasks];
          tasks.splice(tasks.indexOf(item), 1);
          setTasks([...tasks, { name: task.name, stage: st - 1 }]);

          // console.log("Current stageIndex: ",stageIndex);
          // console.log("Current taskIndex: ", taskIndex);
          stagesTasks[stageIndex].splice(taskIndex, 1);
          // stagesTasks[st+1].push({name: task.name,stage: st+1 });
          // console.log("stageTask: ",stagesTasks);
        }
      }
    });
  }

  function arrowForward(task, stageIndex, taskIndex) {
    console.log("Got: ", task);
    tasks.map((item, index) => {
      if (item.name === task.name) {
        let st = item["stage"];
        if (st != 3) {
          let newList = [...tasks];
          // const stageindex= stagesTasks[st].indexOf({name: task.name, stage:st});
          newList.splice(index, 1);
          let n = [...tasks];
          tasks.splice(tasks.indexOf(item), 1);
          setTasks([...tasks, { name: task.name, stage: st + 1 }]);

          // console.log("Current stageIndex: ",stageIndex);
          // console.log("Current taskIndex: ", taskIndex);
          stagesTasks[stageIndex].splice(taskIndex, 1);
          // stagesTasks[st+1].push({name: task.name,stage: st+1 });
          // console.log("stageTask: ",stagesTasks);
        }
      }
    });
  }

  function deleteTask(task, stageIndex, taskIndex) {
    let n = [...tasks];
    tasks.splice(tasks.indexOf(task), 1);
    setTasks([...tasks]);
  }

  return (
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <ResturantNavbar />
      </div>
      <div className="ml-[10%] flex-grow mt-[2%] w-auto">
        <h1 className="text-xl text-white">Order Management</h1>
        {/* YAHA PE CODE LIKHIYO */}
        <div className="mt-[5%] justify-center align-center">
          <section className="mt-10 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex">
              <input
                id="create-task-input"
                type="text"
                className="px-4 py-2 rounded-l-md"
                placeholder="New task name"
                value={taskName}
                onChange={handleTaskChange}
                data-testid="create-task-input"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
                data-testid="create-task-button"
                disabled={taskName === ""}
              >
                Create task
              </button>
            </form>
          </section>

          <div className="mt-10 flex justify-center align-center">
            {stagesTasks.map((tasks, i) => {
              return (
                <div
                  className="bg-white rounded-lg p-4 ml-5 mr-6 mt-0 shadow-md w-full max-w-7xl"
                  key={`${i}`}
                >
                  <div>
                    <h4 className="text-lg font-bold">{stagesNames[i]}</h4>
                    <ul className="mt-4 space-y-2" data-testid={`stage-${i}`}>
                      {tasks.map((task, index) => {
                        return (
                          <li
                            className="bg-gray-100 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-gray-200"
                            key={`${i}${index}`}
                          >
                            <div className="flex justify-between items-center">
                              <span
                                data-testid={`${task.name
                                  .split(" ")
                                  .join("-")}-name`}
                              >
                                {task.name}
                              </span>
                              <div className="flex">
                                <button
                                  className=" hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l mr-1"
                                  data-testid={`${task.name
                                    .split(" ")
                                    .join("-")}-back`}
                                  disabled={i === 0}
                                  onClick={() => arrowBack(task, i, index)}
                                >
                                  <FaArrowAltCircleLeft />
                                </button>
                                <button
                                  className="hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r mr-1"
                                  data-testid={`${task.name
                                    .split(" ")
                                    .join("-")}-forward`}
                                  disabled={i === 3}
                                  onClick={() => arrowForward(task, i, index)}
                                >
                                    <div className="bg-green-500"><FaArrowAltCircleRight />
</div>
                                  
                                </button>
                                <button
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                  data-testid={`${task.name
                                    .split(" ")
                                    .join("-")}-delete`}
                                  onClick={() => deleteTask(task, index)}
                                >
                                  <i className="material-icons">delete</i>
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
