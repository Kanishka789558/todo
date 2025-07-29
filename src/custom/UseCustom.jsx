import { useState } from 'react';

export default function useCustom() {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState('');
  

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

  

  

   return {
     listTodo,
     setListTodo,
     inputText,
     setInputText,
     toggleCheckbox,
       addTodo,
    deleteListItem,
     updateTodo,
     
  };
 }
