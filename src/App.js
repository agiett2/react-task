import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "August 24 at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meta Interview",
      day: "August 26 at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Amex Interview",
      day: "August 27 at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  };
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddBtn={showAddTask}/>
      {showAddTask &&  <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
