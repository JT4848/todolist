import { useState } from 'react'
import './App.css'


const App = () => {
const [listItem, setListItem] = useState('');
const [toDo, setToDo] = useState([]);

const handleInputChange = (event) => {
  setListItem(event.target.value);
}

const handleAdd = (event) => {
  if(listItem.trim() !== ''){
    setToDo((prevlist) => [...prevlist, listItem]);
    setListItem('');
    event.preventDefault();
  }
}

const handleDelete = (index) => {
  setToDo((prevlist) => prevlist.filter((_, i) => i !== index));
}


  return (
    <>
    <form onSubmit={(event) => handleAdd(event)}>
      <label>To do: </label>
        <input placeholder='type here' value={listItem} onChange={handleInputChange}/>
      <button>Add</button>
    </form>

    {toDo.map((list, index) => {
        return (
          <>
          <h3 key={index}>{list}</h3>
          <button onClick={() => handleDelete(index)}>Delete</button>
          </>
        );
      })}
    </>
  )
}

export default App
