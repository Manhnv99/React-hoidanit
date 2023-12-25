import { useEffect, useState } from "react"


const Test=()=>{

    let [count,setCount]=useState(10)

    let getData= async ()=>{
        let response=(await fetch(`https://jsonplaceholder.typicode.com/posts/1`));
        let data= await response.json();
        console.log(data);
    }

    let congSo=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        getData()
    })



    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{congSo()}}>submit</button>
        </div>
    )
}

export default Test