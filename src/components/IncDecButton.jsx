import React, { useState } from 'react';

const ButtonWithIcons = ({numberOfPeople}) => {
    const [count, setCount] = useState(numberOfPeople);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center justify-between w-20 bg-gray-200 rounded-lg px-2 py-1">
            <button className="text-gray-700" onClick={decrementCount}>-</button>
            <span className="text-gray-900 font-bold">{count}</span>
            <button className="text-gray-700" onClick={incrementCount}>+</button>
        </div>
    );
};

export default ButtonWithIcons;
