import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ToDoList from './ToDoList';

function App ()  {

  const [inputList, setInputList] = useState("APPLE,MANGO");
  const [itemsArr, setItemsArr] = useState([]);

  let itemEvent =(event) => {
    setInputList(event.target.value);
  };

    let add = () => {
    itemsArr.push(inputList);
    // arr.push("123");
    console.log();
    setItemsArr([...itemsArr]);

    setInputList("");
  };

  const deleteItems = ()=>{
    console.log("Deleting items");

    setItemsArr()
  };
   


  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1> ToDo List </h1>
        <br/>
        <input type="text" placeholder="Add a Items" onChange={itemEvent}/>
        <button onClick={add}>+</button>
        

        <ul>
          {itemsArr.map((inputVal ,indexNo) => {
           return <ToDoList
            key={indexNo} 
            id={indexNo} 
            text={inputVal}
            onSelect={deleteItems}
            />
          })}
        </ul>
        
      </div>
    
    </div>
  );
}

export default App;

