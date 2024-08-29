import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext(
    {todoItems : [],
    DeleteItem : () => {},
    addNewItem : () => {}}
);

const handleReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if(action.type === "ADD_ITEM"){
      newTodoItems = [...currTodoItems, {name: action.payload.todoName, dueDate: action.payload.tododate}];
    }
    else if(action.type === "DELETE_ITEM"){
      newTodoItems = currTodoItems.filter(item => item.name !== action.payload.todoItemName);
    }
    return newTodoItems;
  }

const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(handleReducer, []);
    const addNewItem = (todoName, tododate) => {
    const addItemDispatch = {
      type : "ADD_ITEM",
      payload: {
        todoName,
        tododate,
      }
    }
    dispatchTodoItems(addItemDispatch);
  }

  //method to delete an item
  const DeleteItem = (todoItemName) => {
    const addItemDispatch = {
      type : "DELETE_ITEM",
      payload: {
        todoItemName,
      }
    }
    dispatchTodoItems(addItemDispatch);
  }
    return (
        <TodoItemsContext.Provider value={{todoItems, DeleteItem, addNewItem}}>
            {children}
        </TodoItemsContext.Provider>
    )
};
export default TodoItemsContextProvider;