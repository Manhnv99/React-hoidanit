import '../pagescss/addnewBlog.scss'
import { useState } from 'react'
import axios from 'axios'

const AddnewBlog=(params)=>{

    let [title,setTitle]= useState('')
    let [content,setContent]= useState('')

    const handleSubmit= async (e)=>{
        //loại bỏ hành động default là load load lại trang của thằng button
        e.preventDefault();
        if(!title) {
            alert('empty title')
            return;
        }
        if(!content){
            alert('empty content')
            return;
        }
        let data={
            title:title,
            body:content,
            userId:1
        }

        let response=await axios.post(`https://jsonplaceholder.typicode.com/posts`,data)
        if(response.status===201 && response.data){
            let newData=response.data;
            params.addNew(newData)
            console.log('submited!',newData);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="newBlog__container">
                <div>------------Add New Blog-------------</div>
                    <div className="newBlog__css">
                        <p>Title:</p>
                        <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className="newBlog__css">
                        <p>Body:</p>
                        <input type='text' value={content} onChange={(e)=> setContent(e.target.value)}/>
                    </div>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </>
    )
}

export default AddnewBlog