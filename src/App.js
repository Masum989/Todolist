import React,{useState} from 'react';
import './App.css';
import InputSpace from './components/InputSpace';
import Todoitems from './components/Todoitems'


function App() {
  const [todoItems,setTodoItems]  = useState([]);

  
  const addItem=(input)=>{
      setTodoItems(prevValue =>{
        return [input,...prevValue];
      });   
    }
    const deleteItem = (id)=> {
       setTodoItems(prevValue =>{
        return prevValue.filter((input,index) =>{
            return index!==id; 
          }
        );
       }) ;
      }
  

  return (
     <div className='container'>
     <div className='heading'>
      <h1>To-Do List</h1>
      </div>
      <InputSpace onAdd={addItem} />
      <div>
        <ul>
          {todoItems.map((todolist,index) => ( 
            <Todoitems 
            key ={index}
            id ={index}
            text ={todolist} 
            onChecked ={deleteItem}
           />
          ))}
        </ul>
      </div> 
     </div> 
     
  );
}

export default App;
