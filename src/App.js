import './App.css';
import { useState, useEffect } from 'react';
import AddTask from './components/addTasks';
import Tasks from './components/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 &&
        tasks.map((task) => <Tasks key={task.id} task={task} setTask={setTasks} />)}
    </div>
  );
}

export default App;
