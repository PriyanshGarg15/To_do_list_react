
import React, { useState } from 'react';
const App = () => {
  const [list, setList] = useState([]);
  const [value, setvalue] = useState("");


  const addToList=()=>
  {
    if(value.length === 0)
    {
      alert("input field is required")
    }
    else{
      setList([
        ...list,
        value
      ])
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>
        Dynamic List using useState and Array
      </h1>
      <div>
        <input
          onChange={(e) => setvalue(e.target.value)}
          style={{
            border: '1px solid black',
            padding: 12,
            borderRadius: 4,
          }}
          placeholder='Enter product name'
        />
        <button
          onClick={addToList}
          style={{
            border: 'none',
            backgroundColor: 'green',
            color: 'darkorange',
            padding: 12,
            width: 110,
            borderRadius: 6
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {list.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
