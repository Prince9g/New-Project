import { useRef } from "react";
const Input = ({onEvent}) =>{
    const currVal = useRef();
    const onClickHandler = (event) => {
        event.preventDefault();
        onEvent(currVal.current.value);
        currVal.current.value = '';
    }
    return (
        <form onSubmit={onClickHandler}>
            <input type="text" ref={currVal}></input>
            <button >click me</button>
        </form>
    )
}
export default Input;