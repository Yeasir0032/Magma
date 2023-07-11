import {useState} from "react"
import "./pagutil.css"


export const Notes = () => {
  const [notelist,setList] = useState([]);
  

  

  
  return (<div>
    <h1>Notes - Magma</h1><br/>
    <div className="add-note-area">
      <input type="text" />
      <button id="btn-add" onClick="add-note" >+</button>
    </div>
  
  </div>
);
};