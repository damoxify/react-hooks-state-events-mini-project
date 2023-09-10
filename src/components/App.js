import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
 

  return (
    <div className="App">
       <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={categoryFilter}
        onSelectCategory={(category) => setCategoryFilter(category)}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
