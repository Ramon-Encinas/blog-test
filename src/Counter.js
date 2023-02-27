import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);

    const incrementClick = () => {
        setCount(count + 1);
    }

    const decrementClick = () => {
        setCount(count -1);
    }

    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={incrementClick}>Increment</button>
            <button onClick={decrementClick}>Decrement</button>
        </div>
    )
}

export default Counter;