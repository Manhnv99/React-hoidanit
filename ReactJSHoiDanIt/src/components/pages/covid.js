import "../pagescss/covid.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./loading";

const Covid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState("posts");
  let change = (e) => {
    setTest(e);
  };
  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); //<-- bước 1 của cancel requse axios
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/${test}`,
          {
            cancelToken: ourRequest.token, //<-- bước 2
          }
        );
        // const response = await fetch(`https://jsonplaceholder.typicode.com/${test}`);
        // let data= await response.json();
        setData(res.data);
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
    }, 2000);

    return () => ourRequest.cancel(); //<-- bước 3
  }, [test]);

  return (
    <div>
      <button
        onClick={(e) => {
          change(e.target.innerHTML);
        }}
        className="bt1"
      >
        posts
      </button>
      <button
        onClick={(e) => {
          change(e.target.innerHTML);
        }}
      >
        todos
      </button>
      {loading === true && <Loading />}
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    {item.completed === true ? "Hoàn Thành" : "Chưa Hoàn Thành"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
