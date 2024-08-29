import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitem from "./Todoitem";
import styles from "./Todoitem.module.css";
const TodoItems = ({onDeleteClick}) => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  const {DeleteItem} = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
      <Todoitem todoName={items.name} tododate={items.dueDate} onDeleteClick={DeleteItem} />
        ))}
    </div>
  );
};
export default TodoItems;
