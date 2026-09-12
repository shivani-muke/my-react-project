import { useEffect, useState } from "react";
function PersonInfo(props){
    const [i, setAge] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleString());
    const {name, age}=props;
    // props destructuring
  // props - values u pass through component tag accepeted as object literals

  const applyAge = (op)=>{
    if(op==='+'){
        setAge(i+1)
    }else{
        setAge(i-1)
    }
  //* whenever we need to pass params in event then arow function should be used and not simply called the loading functions  
  }
  useEffect(()=> {
    setInterval(()=>setTime(new Date().toLocaleString()),1000)
})
    return (
        <div className="pers">
            <h2>Name :{name} </h2>
            <h2>age: {i}</h2>
            <h3>{time}</h3>
            <button onClick={()=>applyAge('+')}>Increase</button>
            <button onClick= {()=>applyAge('-')}>Decrease</button>
        </div>
    )
}
//1) useState returns two elements, the value need to be changed and setter function, react rerenders the value changed by useState 
    //2)lazy initialization= when useState happens then initial state is rerendered to prevent that we need arrow function in initial stage of usetate
//3) useEffect() in functional component is used for side Effect code like mutation, subscription, logging, timers and is like componentDidMount(), componentidUpdate(), componentWillUnMount() methods
// 4) Also second parameter in useEffect is Array of function which we want to render only on every useEffect call  
// 5) when we put paranthesis in front of function of onClick it gets called on onLoad, hence we need to return a fun, but for params refer point *.
export default PersonInfo;