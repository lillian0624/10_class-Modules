import "./App.css";
import { useState } from "react";
import { useRef } from 'react';

let temp;
const App = () => {
 
const h1Ref = useRef(1);
// const h1Ref = {current:null};
console.log(temp === h1Ref);

const [count, setCount]= useState(1);
temp = h1Ref;

 const clickHandler = ()=>{ 

   console.log(h1Ref); 
  // alert(h1Ref.current=== header);
  // h1Ref.current.innerText='xx';
//   const header = document.getElementById('header');
// alert(header)
// header.innerHTML = 'sss';

};

const countAddHandler = ()=>{
  setCount(prevState=>prevState+1);
};

  return (
    <div className={"app"} > 
      <h1 id="header" ref={h1Ref}>
       App{count}
      </h1>
      <button onClick={clickHandler}>+</button>
      <button onClick={countAddHandler}>3</button>
    </div>
  );
};

export default App;
