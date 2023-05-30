import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTask({ tasks, setTasks }) {
  const inputRef = useRef(null);

  function inputValue() {
    const inputValue = inputRef.current.value.trim();
    if(inputValue){
      const data = { id: uuidv4(), taskName: inputRef.current.value,checking:0};
      setTasks([...tasks, data]);
      inputRef.current.value = '';
    }
    else{
      alert('Please fill input')
    }
  }

  return (
    <>
      <main>
        <div className="addInput">
          <input className='inputTodo' type="text" ref={inputRef} placeholder="Type text" />
          <button className='add' onClick={inputValue}>Add</button>
        </div>
      </main>
    </>
  );
}

export default AddTask;
