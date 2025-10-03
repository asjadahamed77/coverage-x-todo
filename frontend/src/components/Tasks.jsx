import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Tasks = () => {
  const { tasks, refreshTasks, loading, error } = useContext(AppContext);

  const markDone = async (id) => {
    try {
      await axios.patch(`/task/${id}/done`);
      refreshTasks();
    } catch (err) {
      console.error("Error marking done:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/task/${id}`);
      refreshTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full">
      <h1 className="text-xl font-medium mb-4">Your Tasks</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h2
                  className={`text-lg font-medium ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600">{task.description}</p>
              </div>
              <div className="flex gap-2">
                {!task.completed && (
                  <button
                    onClick={() => markDone(task.id)}
                    className="bg-green-500 text-white px-4 py-1 rounded-lg hover:opacity-90"
                  >
                    Done
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:opacity-90"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
