import { useEffect, useState } from "react";
import '../pagescss/crud.scss'
import Loading from "./loading";

const Crud=()=>{

    let people=[
        {
            id:1,
            name:'Mạnh',
            age:19,
            major:'CNTT'
        },
        {
            id:2,
            name:'Huế',
            age:22,
            major:'TKDH'
        }
    ]
    let [person,setPeople]=useState(people)
    let [state,setState]=useState(false)
    let [isLoading,setIsLoading]=useState(false)
    //dùng như 1 GetAll =)))
    useEffect(()=>{
        setPeople([...person])
    },[state])

    let editOrUpdate=(id)=>{
        setIsLoading(true)
        setTimeout(()=>{
            let list =document.querySelectorAll('.register input')
            let name=list[0].value
            let age=list[1].value
            let major=list[2].value
            person.forEach(item=>{
                if(item.id===id){
                    item.name=name;
                    item.age=age;
                    item.major=major;
                }
            })
            state ? setState(false) : setState(true)
            setIsLoading(false)
        },500)
    }

    let deletePerson=(id)=>{
        setIsLoading(true)
        setTimeout(()=>{
            let newPerson=person.filter(item=>(
                item.id!=id
            ))
            setPeople(newPerson)
            setIsLoading(false)
        },500)
    }

    let addPerson=()=>{
        setIsLoading(true)
        setTimeout(()=>{
            let list =document.querySelectorAll('.register input')
            let name=list[0].value
            let age=list[1].value
            let major=list[2].value
            person.push({id:Math.floor(Math.random()*100),name:name,age:age,major:major})
            state ? setState(false) : setState(true)
            setIsLoading(false)
        },500)
    }
    


    return(
        <div className="container">
            <div className="register">
                <input type="text" placeholder="Sign Your Name"/>
                <input type="text" placeholder="Sign Your Age"/>
                <input type="text" placeholder="Sign Your Major"/>
                <button onClick={()=>{addPerson()}}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Chuyên Ngành</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                {isLoading &&<Loading/>}
                {isLoading===false && <tbody>
                    {person.map(item=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.major}</td>
                                <td>
                                    <i onClick={()=>{editOrUpdate(item.id)}} class="fa-solid fa-pencil pencilIcon"></i>
                                    <i onClick={()=>{deletePerson(item.id)}} class="fa-solid fa-trash trashIcon"></i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                }
                
            </table>
        </div>
    );
}

export default Crud