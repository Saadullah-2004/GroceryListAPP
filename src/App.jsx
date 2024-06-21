import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const [count, setCount] = useState(0)
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')));

  const [newItem, setNewItem] = useState('');

  const[search, setSearch] = useState('');

const setAndSaveItems = (items) => { 
  setItems(items);
  localStorage.setItem('items', JSON.stringify(items));

}

const addItem = (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const myNewItem = {id, checked: false, item};
  const newItems = [...items, myNewItem];
  setAndSaveItems(newItems);

}

const handleCheck = (id) => {
  const newItems = items.map((item) => {
      if (item.id === id) {
          return {
              ...item,
              checked: !item.checked
          };
      }
      return item;
  });
  setAndSaveItems(newItems);
};

const handleDelete = (id) => {
  const newItems = items.filter((item) => item.id !== id);
  setAndSaveItems(newItems);
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  setNewItem('');
  console.log('submit')
}


  return (
    <div className='App'>
      <Header title="Grocery List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
      length = {items.length}
      />
      </div>

  )
}
export default App
