import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='item'>Add an item:</label>
            <input 
                autoFocus 
                ref={inputRef}
                id='additem' 
                type='text'
                placeholder='Add Item'
                required 
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)}
            />
        
            <button 
                type='submit'
                aria-label='Add item'
                onClick={() => inputRef.current.focus()}
            >
 
            </button>
        </form>
    );
};

export default AddItem;