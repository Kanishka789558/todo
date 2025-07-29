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

  const deleteListItem = (index) => {
    const newList = [...listTodo];
    newList.splice(index, 1);
    setListTodo(newList);
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = [...listTodo];
    updatedTodos[index].text = newText;
    setListTodo(updatedTodos);
  };

  const toggleCheckbox = (index) => {
    const updatedTodos = [...listTodo];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setListTodo(updatedTodos);
  };

  const filteredTodos = listTodo.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

   return {
     listTodo,
     setListTodo,
     inputText,
     setInputText,
     searchTerm,
     setSearchTerm,
       addTodo,
    deleteListItem,
     updateTodo,
     toggleCheckbox,
    filteredTodos
  };
 }
