import React from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import useCustom from './custom/UseCustom';

function App() {
  const {
    inputText,
    setInputText,
    addTodo,
     updateTodo,
     deleteListItem,
    toggleCheckbox,
     searchTerm,
     setSearchTerm,
     filteredTodos
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
           searchTerm={searchTerm}
           setSearchTerm={setSearchTerm}
        />
        <input
          type="text"
          className="input-box-todo"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredTodos.map((item, i) => (
          <TodoList
            key={i}
            index={i}
            item={item}
            deleteItem={deleteListItem}
            updateItem={updateTodo}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
