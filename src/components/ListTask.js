import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/actions/taskActions';

const ListTask = () => {
  const tasks = useSelector(state => {
    switch (state.filter) {
      case 'done':
        return state.tasks.filter(task => task.isDone);
      case 'notDone':
        return state.tasks.filter(task => !task.isDone);
      default:
        return state.tasks;
    }
  });
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button
          className={currentFilter === 'all' ? 'active' : ''}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={currentFilter === 'done' ? 'active' : ''}
          onClick={() => dispatch(setFilter('done'))}
        >
          Done
        </button>
        <button
          className={currentFilter === 'notDone' ? 'active' : ''}
          onClick={() => dispatch(setFilter('notDone'))}
        >
          Not Done
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map(task => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;