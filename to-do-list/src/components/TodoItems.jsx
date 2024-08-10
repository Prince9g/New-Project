import Todoitem from "./Todoitem";
import styles from "./Todoitem.module.css";
const TodoItems = ({todoItems, onDeleteClick}) => {
  return (
    <div className={styles.itemsContainer}>
        {todoItems.map((items) => (
      <Todoitem todoName={items.name} tododate={items.dueDate} onDeleteClick={onDeleteClick} />
        ))}
    </div>
  );
};
export default TodoItems;
