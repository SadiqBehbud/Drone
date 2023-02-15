import {useState} from "react";



function HomeToPage1() {
    const [index,setIndex]= useState(0)
    document,addEventListener("scroll",(e)=>{
        setIndex(parseInt(window.scrollY / 35))
    })
    // console.log(index)
  return <div className="frame1">
    <img src={`./ezgif1/ezgif(${index}).jpg`} alt="" />
  </div>;
}

export default HomeToPage1;
