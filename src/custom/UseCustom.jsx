// src/custom/UseCustom.jsx

import { useState } from 'react';

export default function useCustom() {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (text) => {
    if (text.trim() === '') return;
    setListTodo([...listTodo, { text, completed: false }]);
    setInputText('');
  };

  const filteredTodos = listTodo.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    inputText,
    setInputText,
    searchTerm,
    setSearchTerm,
    addTodo,
    filteredTodos
  };
}
