
import React from "react";

export default function Counter (){
    
    let [count, countFn] = React.useState(0)

    const add = () => countFn(++count);
    const min = () => countFn(--count);

    return (
        <div>
            <button onClick={min}> MINUS </button>
            <span style={{color: 'red', fontSize: '24px'}}>
                { count }
            </span>
            <button onClick={add}> PLUS </button>

        </div>
    )  
}