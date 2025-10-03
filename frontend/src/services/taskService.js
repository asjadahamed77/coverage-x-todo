import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:4000/api";

export const fetchTasks = async () => {
  const { data } = await axios.get("/task");
  return data;
};

export const addTask = async (task) => {
  await axios.post("/task", task);
};

export const markDone = async (id) => {
  await axios.patch(`/task/${id}/done`);
};

export const deleteTask = async (id) => {
  await axios.delete(`/task/${id}`);
};
