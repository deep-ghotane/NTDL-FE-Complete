import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const TaskList = ({
  title,
  type,
  tasks,
  handleOnDelete,
  handleOnSwap,
  hour,
}) => {
  //   let tasks = props.tasks;
  //   let handleOnDelete = props.handleOnDelete;

  return (
    <div className="col-sm-12 col-md-6">
      <h2>{title}</h2>
      <hr />
      <table className="table">
        <tbody>
          {tasks.map((item, idx) => {
            return (
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{item.task}</td>
                <td>{item.hour}Hr</td>
                <td>
                  {item.type == "good" ? (
                    <>
                      <button
                        type="button"
                        class="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => {
                          handleOnDelete(item._id);
                        }}
                      >
                        <RiDeleteBin2Fill />
                      </button>{" "}
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                          handleOnSwap(item._id);
                        }}
                      >
                        <FaArrowRightFromBracket />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => handleOnSwap(item._id)}
                      >
                        <IoArrowBackCircleOutline />
                      </button>{" "}
                      <button
                        type="button"
                        class="btn btn-danger"
                        // onclick="deleteTask('Z5zFfV')"
                        onClick={() => handleOnDelete(item._id)}
                      >
                        <RiDeleteBin2Fill />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {type == "good" ? (
        <div class="alert alert-info" role="alert">
          Yous save {hour} hour
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          You wasted {hour} hour
        </div>
      )}
    </div>
  );
};

export default TaskList;
