import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions/taskActions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedDescription.trim()) {
      dispatch(editTask(task.id, editedDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <div className="task-actions">
        <button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Task;