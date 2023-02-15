import {useState} from "react";



function HomeToPage2() {
    const [index,setIndex]= useState(0)
    document,addEventListener("scroll",(e)=>{
        setIndex(parseInt(window.scrollY / 35))
    })
    console.log(index)
  return <div className="frame2">
    <img src={`./ezgif/ezgif(${index}).jpg`} alt="" />
  </div>;
}

export default HomeToPage2;
