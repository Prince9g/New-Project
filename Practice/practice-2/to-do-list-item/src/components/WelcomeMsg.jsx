import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMsg = ()=>{
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    return todoItems.length === 0 && <h1>No Items, Add One</h1>
}
export default WelcomeMsg;