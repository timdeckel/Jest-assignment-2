import React, {useState} from 'react';

interface ButtonProps {
    text: string;
    altText: string;
    passedFunction: () => void;
}

const Button = ({text , altText, passedFunction}: ButtonProps) => {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
        passedFunction();
    }

    if(text === 'Show'){
        return (
            <button data-testId="toggle-message" className={toggled ? 'p-2 bg-red-500' : 'p-2 bg-blue-500'} onClick={handleClick} >{toggled ? text: altText}</button>
          );
    } else {
        return (
            <button data-testId="toggle-important" className={toggled ? 'p-2 bg-red-500' : 'p-2 bg-blue-500'} onClick={handleClick} >{toggled ? text: altText}</button>
          );
    }
  
};

export default Button;