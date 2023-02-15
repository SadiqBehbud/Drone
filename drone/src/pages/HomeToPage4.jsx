import {useState} from "react";



function HomeToPage4() {
    const [index,setIndex]= useState(0)
    document,addEventListener("scroll",(e)=>{
        setIndex(parseInt(window.scrollY / 35))
    })
    console.log(index)
  return <div className="frame4">
    <img src={`./ezgif4/ezgif(${index}).jpg`} alt="" />
  </div>;
}

export default HomeToPage4;
