import styles from "./printing.module.css";
import Box from './Box';
const Print = (props) => {
    const arr = props.arr;
    return (
            <h1>{arr.map((items) => (<li key={items} className="boxing">{items}</li>))}</h1>
    )
}
export default Print;