import React from 'react';
import SubTitle from '../SubTitle';

const Header = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold text-pink-600 mb-2 tracking-wide'>Guest Book</h1>
        <SubTitle text="Leave a message down below..."/>
    </div>
  );
};

export default Header;