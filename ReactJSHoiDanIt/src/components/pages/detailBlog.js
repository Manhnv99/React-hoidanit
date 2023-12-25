import { useEffect,useState } from "react";
import { useParams,useNavigate} from "react-router-dom"
import Loading from "./loading";
import axios from "axios";
import '../pagescss/detailBlog.scss'


const DetailBlog=()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //useParams trả về cái id 
    //phải ghi đúng tên đc chuyền ở cái đường dẫn
    let {id}=useParams();
    let navigate=useNavigate();

    const handleBackPage=()=>{
        navigate("/blog")
    }

    useEffect(()=>{
        const ourRequest = axios.CancelToken.source(); //<-- bước 1 của cancel requse axios
        setLoading(true);
        async function fetchData() {
          try {
            const res = await axios.get(
              `https://jsonplaceholder.typicode.com/posts/${id}`,
              {
                cancelToken: ourRequest.token, //<-- bước 2
              }
            );
            // const response = await fetch(`https://jsonplaceholder.typicode.com/${test}`);
            // let data= await response.json();
            setData(res.data);
            console.log(res.data);
            setLoading(false);
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
        },1000);
        return () => ourRequest.cancel(); //<-- bước 3
    },[])


    return(
        <>   
            {loading===true && <Loading/>}
            {data && loading===false &&
                <>
                    <div style={{cursor:"pointer"}} onClick={handleBackPage}> &lt;-- Back</div>
                    <div className="detail__container">
                        <span>Id:{id}</span>
                        <div className="detail__title">
                            Title:{data.title}
                        </div>
                        <div className="detail__body">
                            Body:{data.body}
                        </div>
                    </div>
                </>  
            }
        </>
    )
}

export default DetailBlog