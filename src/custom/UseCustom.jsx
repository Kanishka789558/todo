// src/custom/UseCustom.jsx
import { useState } from 'react';

export default function useCustom() {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = (text) => {
    if (text.trim() === '') return;
    setListTodo([...listTodo, { text }]);
    setInputText('');
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = [...listTodo];
    updatedTodos[index].text = newText;
    setListTodo(updatedTodos);
  };

  return {
    listTodo,
    setListTodo,
    inputText,
    setInputText,
    addTodo,
    updateTodo,
  };
}
