import React, { useState } from 'react';

const Test = ({ count }) => {
    const [count1, setCount1] = useState(0)

    const plus = () => {
        const newCount = count1 + 1;
        setCount1(newCount)
    }
    const minus = () => {
        if (count1 >= 1) {
            const newCount = count1 - 1;
            setCount1(newCount)

        }
    }

    return (
        <div>
            <h1>{count1}</h1>

            <button className='m-3' onClick={plus}>+</button>
            <button onClick={minus} >-</button>

        </div>
    );
};

export default Test;