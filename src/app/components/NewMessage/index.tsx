'use client'
import React, {useState} from 'react';

interface newMessageProps {
    onSend: ( text: string ) => void;
}

const NewMessage = ({ onSend } : newMessageProps) => {
    const [input, setInput] = useState<string>('');

    const handleClick = (text: string) => {
        onSend(text) 
        setInput('')
    }

    return (
    <div>
        <h4></h4>
        <label></label>
        <input onChange={(e)  => setInput(e.target.value)} type="text" value={input} placeholder='Leave a message...' className='text-black' />
        <button onClick={input.trim()? () => {handleClick(input)}: () => {setInput('')}} >Send!</button>
    </div>
  );
};

export default NewMessage;