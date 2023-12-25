import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./loading";
import "../pagescss/blog.scss";
import { Link, Route,useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import AddnewBlog from "./addnewblog";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let [title,setTitle]= useState('')
  let [content,setContent]= useState('')

  //Bootrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); //<-- bước 1 của cancel requse axios
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            cancelToken: ourRequest.token, //<-- bước 2
          }
        );
        if (res.data && res.data.length > 0) {
          let newData = res.data.slice(91);
          setData(newData);
          setLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          setLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => ourRequest.cancel(); //<-- bước 3
  }, []);

  const handleAddNew=(a)=>{
    setData([a,...data])
    // data.unshift(a)
    handleClose()
  }
  const deleteBlog=(id)=>{
    setData(data.filter(item=> item.id!==id))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add New Blog
      </Button>
      <div className="container">
        {loading === true && <Loading />}
        <div className="blog-container">
          <div className="row">
            {loading === false &&
              data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <div className="blog-card col-md-4">
                    <div className="title">
                     <div>
                     Title: {item.title}
                     </div>
                     <div className="titledelete" onClick={()=>{deleteBlog(item.id)}}>
                      X
                     </div>
                    </div>
                    <div className="body">Body: {item.body}</div>
                    <button>
                      <Link to={`${item.id}`}>View Detail</Link>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddnewBlog addNew={handleAddNew}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Blog;
