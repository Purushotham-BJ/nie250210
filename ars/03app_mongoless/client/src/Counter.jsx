import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const onIncrement = function(){
        setCount(count+1);
    };
    const onDecrement = function(){
        if (count>0){
            setCount(count-1);}
    };
    return (
        <>
            <div>
                <button class ="btn btn-danger" onClick={onDecrement}>-</button>
                <span>{count}</span>
                <button class ="btn btn-success" onClick={onIncrement}>+</button>
            </div>
        </>
    )
}
export default Counter;