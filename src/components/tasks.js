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
        <div className='Buttons'>
        {task.checking !== 1 ?
          <button className='check' onClick={() => checked(task.id)}>check</button> :null
        }       
        <button className='remove' onClick={() => deleted(task.id)}>remove</button>
        </div>
      </div>
    </>
  );
}

export default Tasks;
