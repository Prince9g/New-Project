import Box from "./components/Box";
import Print from "./components/printing";
import './App.css';
import Input from "./components/Input";
import { useState } from "react";
const Hello = () => {
  const arr = ["prince", "shyam", "yash", "ankit"];
  const [oldArr, setArr] = useState(arr);
  const handleEvent = (newItem) => {
    const newArr = [...oldArr, newItem];
    setArr(newArr);
  }
  return (
  <Box>
    <Input onEvent={handleEvent}/>
    <h1>hey bro!!</h1>
    <Print arr={oldArr}/>
  </Box>
    
  )
}
export default Hello;