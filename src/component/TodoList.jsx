import React, { useState } from 'react';

export default function TodoList({ item, index, deleteItem, updateItem, toggleCheckbox }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateItem(index, editedText);
    setIsEditing(false);
  };

  return (
    <li className='list-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => toggleCheckbox(index)}
      />
      {isEditing ? (
        <input
          className='edit-input'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: item.completed ? 'line-through' : 'none',
            marginLeft: '10px'
          }}
        >
          {item.text}
        </span>
      )}

      <span className='icons'>
        {isEditing ? (
          <button className='save-btn' onClick={handleSave}>Save</button>
        ) : (
          <i className="fa-regular fa-pen-to-square edit-icon" onClick={handleEdit}></i>
        )}
        <i className="fa-solid fa-trash delete-icon" onClick={() => deleteItem(index)}></i>
      </span>
    </li>
  );
}
