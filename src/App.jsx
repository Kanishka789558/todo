// src/App.jsx
import React from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import useCustom from './custom/UseCustom';

function App() {
  const {
    inputText,
    setInputText,
    listTodo,
    addTodo,
    updateTodo
  } = useCustom();

  return (
    <div className='main-container'>
      <div className='center-container'>
        <h1 className="app-heading">TODO</h1>
        <hr />
        <TodoInput
          inputText={inputText}
          setInputText={setInputText}
          addTodo={addTodo}
        />

        <ul>
          {listTodo.map((item, index) => (
            <TodoList
              key={index}
              item={item}
              index={index}
              updateItem={updateTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
