import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"

import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";
function App() {
  
  return (
    <TodoItemsContextProvider>
  <center className="container">
      <AppName></AppName>
      <AddTodo/>
      <WelcomeMsg/>
      <TodoItems/>
  </center>
  </TodoItemsContextProvider>
  )
}

export default App
