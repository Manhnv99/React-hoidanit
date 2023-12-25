import { useState,useEffect } from "react";


const CountDown=(props)=>{
    let [count,setCount]=useState(10)

    useEffect(()=>{

        if(count===0){
            props.timeUp()
            return;
        }

        let timer=setInterval(()=>{
            setCount(count-1)
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[count])

    return(
        <h1>
        {count}
        </h1>
    );
}

export default CountDown