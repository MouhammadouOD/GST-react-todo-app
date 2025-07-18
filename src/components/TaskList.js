import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setEditingTask, deleteTask, toggleComplete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one to get started!</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            setEditingTask={setEditingTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;