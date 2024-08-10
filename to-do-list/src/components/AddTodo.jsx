import {useState} from 'react';
function AddTodo({onNewItem}){
  //by using states
    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();
//made a simple function to handle the name change that need to add
    const handleNameChange = (event) => {
      setTodoName(event.target.value);
    }
    //made another function that handles date change from user input
    const handleDateChange = (event) => {
      setDueDate(event.target.value);
    }
    //handling add button 
    const handleAddButton = () =>{
      onNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }
    return (
      <div className="row my-row">
      <div className="col-6">
      <input type="text" placeholder="Enter to-do Here" 
      value={todoName} onChange={handleNameChange}></input>
      </div>
      <div className="col-4">
      <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success my-button" onClick={handleAddButton}>Add</button>
      </div>
    </div>
    )
}

export default AddTodo;