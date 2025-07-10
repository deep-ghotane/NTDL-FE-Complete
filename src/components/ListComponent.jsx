import React from "react";
import TaskList from "./TaskList";

const ListComponent = ({
  tasks,
  handleOnDelete,
  handleOnSwap,
  goodHour,
  badHour,
}) => {
  const filterGoodType = (item) => {
    return item.type === "good";
  };
  //   good list
  let goodTasks = tasks.filter(filterGoodType);

  //   bad list
  let badTasks = tasks.filter((item) => item.type == "bad");

  return (
    <div className="row">
      {/* Good List */}
      <TaskList
        title="GOOD LIST"
        tasks={goodTasks}
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
        type="good"
        hour={goodHour}
      />

      {/* Bad List */}
      <TaskList
        title="BAD LIST"
        tasks={badTasks}
        type="bad"
        handleOnDelete={handleOnDelete}
        handleOnSwap={handleOnSwap}
        hour={badHour}
      />
    </div>
  );
};

export default ListComponent;
