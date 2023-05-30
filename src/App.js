import './App.css';
import { useState } from 'react';
import AddTask from './components/addTasks';
import Tasks from './components/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
 function searchTask(e){
  setSearch(e.target.value)
 }
 const filteredTasks=tasks.filter(task => {
  return task.taskName.toLowerCase().indexOf(search.toLowerCase()) !== -1;});
  return (
    <div className="App">
      <div className='search'>
        <span>Search:</span><input type='text' onChange={searchTask}/>
      </div>
      <AddTask tasks={tasks} setTasks={setTasks} />
      {filteredTasks.length > 0 &&
        filteredTasks.map((task) => <Tasks key={task.id} task={task} setTask={setTasks} />)}
    </div>
  );
}

export default App;
