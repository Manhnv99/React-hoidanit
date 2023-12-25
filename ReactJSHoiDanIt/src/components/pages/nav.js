import { useEffect } from "react";
import "../pagescss/nav.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  //Đây là cách cũ dùng để add active vào nav mà mình add

  // const select=()=>{
  //     let navItem=document.getElementsByClassName('item-nav')
  //     for(let i=0;i<navItem.length;i++){
  //         navItem[i].addEventListener('click',()=>{
  //             for(let j=0;j<navItem.length;j++){
  //                 navItem[j].setAttribute('class','item-nav')
  //             }
  //             navItem[i].setAttribute('class','item-nav active')
  //         })
  //     }
  // }
  // useEffect(()=>{
  //     select()
  // })

  return (
    <div className="navbar1">
      {/* <div className="item-nav active"><Link to='/'>Crud</Link></div>
            <div className="item-nav"><Link to='/covid'>Covid</Link></div>
            <div className="item-nav"><Link to='/countDown'>CountDown</Link></div> */}
      <div className="item-nav">
        <NavLink activeclassname="active" to="/">
          Crud
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink activeclassname="active" to="/covid">
          Covid
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink activeclassname="active" to="/countDown">
          CountDown
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink activeclassname="active" to="/blog">
          Blog
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink activeclassname="active" to="/test">
          Test
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
