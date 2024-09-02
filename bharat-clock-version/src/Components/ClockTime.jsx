import { useEffect } from "react";
import { useState } from "react";

let ClockTime = () =>{
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        }
    },[])
    return <p>This is the time: {time.toLocaleDateString()}-{" "}{time.toLocaleTimeString()}</p>;
};
 
export default ClockTime;