'use client'

import React, {useState} from 'react';
import { ListType } from '@/utils/types';
import List from '../List';
import NewMessage from '../NewMessage';

interface GuestListProps {
  listItem: ListType[] | null
}

const GuestList = ({ listItem }: GuestListProps) => {
  const [messages, setMessages] = useState( listItem || []);

  const addMessage = (message: string) => {
    const newMessage = { id: messages.length + 1, message };
    setMessages([...messages, newMessage]);
}

  return (
    <div>
      <NewMessage onSend={addMessage}/>
      <div data-testid="guest-list">
        {messages && messages.map((item) => 
        <List key={item.id} {...item}/> )}
      </div>
    </div>
  );
};

export default GuestList;