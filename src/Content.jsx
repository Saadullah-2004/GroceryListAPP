import React from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {

    const [count, setCount] = useState(0)


    return (
        <main>
            {items.length ? (
                <ItemList 
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p style = {{marginTop: '2rem'}}>No items in the list</p>
            )}
        </main>
    );
};

export default Content;