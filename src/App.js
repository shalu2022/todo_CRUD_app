import ListItems from "./components/ListItems";
import Input from "./components/Input";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [lists, setLists] = useState([])
  const [input, setInput] = useState([""])
  const [selectedId, setSelectedId] = useState()
  const [isEditting, setIsEditting] = useState(false)
 
  const inputHandler =(e)=>{ 
    setInput(e.target.value) 
  }
  
  const submitHandler = (input)=>{
    // e.preventDefault();
    if(input===""){
        alert("Enter your To do Item")
    }else{
      const ids = uuidv4();
      let uni = ids.slice(0,8)
      setLists([ ...lists, 
      {
        id: uni,
       item: input 
      }
    ]);
     setInput("")
    }
  
  };

  const updateHandler = (input)=>{
    setIsEditting(false)
    const ids = uuidv4();
    let uni = ids.slice(0,8)
    const newEditList = lists.filter(it=>it.id!== selectedId)
    setLists([ ...newEditList, 
    {
      id: uni,
     item: input 
    }
  ]);
   setInput("")
  };

  return (
   <div>
     <Input submitHandler={submitHandler} input={input} inputHandler={inputHandler} updateHandler={updateHandler} isEditting={isEditting}/>
     <ListItems lists={lists} setLists={setLists} setInput={setInput} setSelectedId={setSelectedId} setIsEditting={setIsEditting}/>
   </div>
  );
}

export default App;
