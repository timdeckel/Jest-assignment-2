import React from 'react';

interface SubTitleProps {
    text?: string;
}

const SubTitle = ({text}: SubTitleProps) => {
  return (
    <div>
        <h3 className='text-1xl text-pink-400 pt-4 font-light' >{text}</h3>
    </div>
  );
};

export default SubTitle;