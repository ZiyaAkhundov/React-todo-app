import React from 'react';

function Tasks({ task, setTask }) {
  function deleted(id) {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }
  function checked(id){
    setTask(prevTasks => prevTasks.map(task => {
      if (task.id === id) {
        return { ...task, checking: 1 };
      }
      return task;
    }));
  }
  return (
    <>
      <div className="tasks">
        <p className={task.checking === 1 ? 'text-line' : null}>{task.taskName}</p>
        {task.checking !== 1 ?
          <button onClick={() => checked(task.id)}>check</button> :null
        }       
        <button onClick={() => deleted(task.id)}>remove</button>
      </div>
    </>
  );
}

export default Tasks;
