import {useState} from "react";



function HomeToPage3() {
    const [index,setIndex]= useState(0)
    document,addEventListener("scroll",(e)=>{
        setIndex(parseInt(window.scrollY / 35))
    })
    // console.log(index)
  return <div className="frame3">
    <img src={`./ezgif3/ezgif(${index}).jpg`} alt="" />
  </div>;
}

export default HomeToPage3;
