// src/component/TodoList.jsx
import React, { useState } from 'react';

export default function TodoList({ item, index, updateItem }) {
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
      {isEditing ? (
        <input
          className='edit-input'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ marginLeft: '10px' }}>{item.text}</span>
      )}
      <span className='icons'>
        {isEditing ? (
          <button className='save-btn' onClick={handleSave}>Save</button>
        ) : (
          <i className="fa-regular fa-pen-to-square edit-icon" onClick={handleEdit}></i>
        )}
      </span>
    </li>
  );
}
