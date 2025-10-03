import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const AddTask = () => {
  const { refreshTasks } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post("/task", { title, description });
      setTitle("");
      setDescription("");
      refreshTasks(); // refresh the list after adding
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="w-full sm:w-[550px]">
      <h1 className="text-xl font-medium">Add a Task</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 mt-4"
      >
        <input
          type="text"
          className="p-2 border rounded-lg w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 border rounded-lg w-full"
          rows={5}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-fit bg-mainColor dark:bg-foreground dark:text-background text-white px-8 py-2 rounded-lg hover:opacity-90 duration-200 transition-opacity"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
