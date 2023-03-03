import React,{useState} from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm]=useState("");
  return (
    <div className="App">
      <input 
      type="text"
      placeholder='Search ......'
      onChange={(event)=>{
        setSearchTerm(event.target.value);
      }}

      />
      {/* eslint-disable-next-line array-callback-return */}
      {JSONDATA.filter((value)=>{
        if(searchTerm === ""){
          return value;
        }else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return value;
        }
      }).map((value, key)=>{
        return(
          <div className="user" key={key}>
            <p>{value.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
