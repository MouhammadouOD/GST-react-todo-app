import React from 'react';

function TaskItem({ task, setEditingTask, deleteTask, toggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <button onClick={() => setEditingTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;