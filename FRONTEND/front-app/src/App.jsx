import { useEffect, useState } from 'react'
import { List } from './Components/Lists';
import axios from 'axios'
import { baseURL } from './Utils/constants';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false)
  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    axios
    .get(baseURL).then((res) => {
      setTasks(res.data);
      setUpdateUI((prevState) => !prevState)
    })
  },[updateUI])

  const addTask = () => {
    axios.post(baseURL, {
      task: input
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log( err ))
    setInput("")
  }

  const updateMode = (id, text) =>  {
    console.log(text)
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURL}/${updateId}`, {
      task: input
    }).then((res) => console.log(res.data))
    setUpdateUI((prevState) => !prevState)
    setUpdateId(null)
    setInput("")
  }

  return (
    <main>
      <h1 className='title'>Oscar Anillo CRUD-APP</h1>
      <div className='input_holder'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' onClick={updateId ? updateTask : addTask}>{updateId ? "Update Task" : "Add Task"}</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <List 
          key={task._id} 
          id={task._id} 
          task={task.task} 
          setUpdateUI={setUpdateUI} 
          updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  )
}

export default App
