import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, editingTask }) {
  const [task, setTask] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!task.name.trim()) newErrors.name = 'Task name is required';
    if (!task.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editingTask) {
      updateTask({ ...task, id: editingTask.id });
    } else {
      addTask({ ...task, id: Date.now(), completed: false });
    }
    
    setTask({ name: '', description: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Task Name</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Enter task name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      
      <button type="submit" className="submit-btn">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;