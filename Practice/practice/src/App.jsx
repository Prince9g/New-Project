import Print from "./components/printing";

const Hello = () => {
  const arr = ["prince", "shyam", "yash", "ankit"];
  return (
    <Print arr={arr}/>
  )
}
export default Hello;