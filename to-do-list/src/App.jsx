import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"
import {useState} from 'react';
import WelcomeMsg from "./components/WelcomeMsg";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (todoName, tododate) => {
    const newTodoItems = [...todoItems, {name: todoName, dueDate: tododate}];
    setTodoItems(newTodoItems);
  }

  //method to delete an item
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }
  return <center className="container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMsg/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
  </center>
}

export default App
