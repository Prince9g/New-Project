import styles from "./printing.module.css";
const Print = (props) => {
    const arr = props.arr;
    return (
        <h1 className={styles.key}>{arr.map((items) => (<li>{items}</li>))}</h1>
    )
}
export default Print;