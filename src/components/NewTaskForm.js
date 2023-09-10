import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("Code");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the task text is not empty
    if (taskText.trim() === "") {
      return;
    }
    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    onTaskFormSubmit(newTask);

    // Reset form fields
    setTaskText("");
    setTaskCategory("Code");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"  value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
