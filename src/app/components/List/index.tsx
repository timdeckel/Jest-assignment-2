import React, {useState} from 'react';
import Button from '../Button';
interface ListProps {
  message: string;
  id:number;
}

const List = ({ id, message  }: ListProps) => {
  const [hidden, setHidden] = useState(false);
  const [important, setimportant] = useState(false);

  const toggleContent = () => {
    setHidden(!hidden)
  }

  const toggleImportant = () => {
    setimportant(!important)
  }

  return (
    <div data-testid="list-item"  className={important ? 'flex bg-yellow-200 p-2' : 'flex bg-pink-100 p-2'}>
          <div className=' gap-8 flex items-center justify-between text-black' key={id}>
            <li className='list-none'>{!hidden ? message : ''}</li>
            <Button text='Show' altText='Hide' passedFunction={toggleContent} ></Button>
            <Button text='Unimportant' altText='Important' passedFunction={toggleImportant} ></Button>
          </div>
    </div>
  );
};

export default List;