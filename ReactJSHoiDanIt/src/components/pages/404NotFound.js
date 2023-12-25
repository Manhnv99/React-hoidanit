import { useNavigate } from "react-router-dom"



const NotFound404=()=>{
    let nav=useNavigate();
    const goToHomePage=()=>{
        nav("/")
    }
    return(
        <div className="not--found-container">
            <h4>This page isn't avaiable</h4>
            <h5>When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or it's been deleted.</h5>
            <button className="btn btn-primary" onClick={goToHomePage}>Go to home page</button>
        </div>
    )
}

export default NotFound404