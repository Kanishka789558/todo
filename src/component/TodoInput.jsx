/* eslint-disable no-unused-vars */
import React from 'react';

export default function TodoInput({
  inputText,
  setInputText,
  addTodo,
  searchTerm,
  setSearchTerm
}) {
  const handleEnterPress = (e) => {
    if (e.keyCode === 13 && inputText.trim() !== '') {
      addTodo(inputText);
    }
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        className='input-box-todo'
        placeholder='Add item...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        className='add-btn'
        onClick={() => {
          addTodo(inputText);
        }}
      >
        +
      </button>
      {/* <input
        type='text'
        className='search-box'
        placeholder='Search...'
        value={searchText}
        onChange={handleSearchChange}
      /> */}
      
    </div>
  );
}
