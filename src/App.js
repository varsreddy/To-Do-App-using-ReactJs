import './App.css';
import {useState} from 'react'
function App() {

  let [todoInput,updateInput] = useState("");
  let [todoList,updateTodos] = useState(
    [
      {id:1,task:'Learn React'},
      {id:2,task:'Learn Js'}
    ]
  )

  let [nextId,setNextId] = useState(3);

  function updateTodo(){
    if(todoInput.trim() ==="") 
        alert("Input field should not be empty!");
    else{
      setNextId(nextId+1);
      let newTodo = [
        ...todoList,
        {
          id : nextId,
          task:todoInput
        }
      ]
      alert('Adding new task: '+todoInput);
      updateTodos(newTodo);
      updateInput("");
    }
  }


  function deleteTodo(id){
    let updatedTodos = todoList.filter(
      (todo)=>{
        if(id === todo.id) alert("Deleting the task: "+todo.task);
        return id !== todo.id;
      }
    )

    

    updateTodos(updatedTodos);
  }


  return (
    <div className="container mt-3 w-50">
      <h1 className="text-center mb-3">ToDo App using React</h1>
      <div className="input-group">
        <input className="form-control" type = 'text'
        onChange={(e) => {
          let task =  e.target.value;
          updateInput(task);
        }
         } value={todoInput}/>
        <button onClick={() => {updateTodo()}} className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-3">
        {
          todoList.map((todo) => {
            return (
              <li className="list-group-item">
                <p>{todo.task}</p>
                <button className="btn" onClick={()=>{
                  deleteTodo(todo.id)
                  }}><i className="fa-solid fa-trash-can float-end"></i></button> 
              </li>
            )
          })
        }
      </ul>
    </div>  
  )
}

export default App;
