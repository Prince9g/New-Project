import { useContext } from "react";
import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo({onNewItem}) {
  // //by using states
  // const [todoName, setTodoName] = useState();
  // const [dueDate, setDueDate] = useState();
  // //made a simple function to handle the name change that need to add
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // //made another function that handles date change from user input
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  //doing it by useRef
  const {addNewItem} = useContext(TodoItemsContext);
  const todoitemName = useRef();
  const todoitemDate = useRef();
  //handling add button
  const handleAddButton = () => {
    const todoName = todoitemName.current.value;
    const dueDate = todoitemDate.current.value;
    if(todoitemDate.current.value != '' && todoitemName.current.value != ''){
      addNewItem(todoName, dueDate);
      todoitemName.current.value='';
      todoitemDate.current.value='';
    }
  };
  return (
    <div className="row my-row">
      <div className="col-6">
        <input
          type="text"
          ref={todoitemName}
          placeholder="Enter to-do Here"
          // value={todoName}
          // onChange={handleNameChange}
        ></input>
      </div>
      <div className="col-4">
        <input type="date" ref={todoitemDate}></input>
        {/* // value={dueDate} onChange={handleDateChange} */}
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success my-button"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
