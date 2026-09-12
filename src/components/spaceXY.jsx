import { useEffect, useState } from "react";
function SpaceXY(){
    const[space,changSpace]=useState("0.0");
    const displayXY =e=>{
        let str = e.pageX +"."+ e.pageY
        changSpace(str);
        console.log(str)
    }
    useEffect(()=>{
        window.addEventListener("mousemove",displayXY);
        return(()=>{
            // this return gives condition of componentWillUnmount()
            // i.e. displayXY wont work when no component is showing up
            window.removeEventListener("mousemove",displayXY)
        })
    })
    return(
        <>
        <div>{space}</div>
        
        </>

    )
}
export default SpaceXY;