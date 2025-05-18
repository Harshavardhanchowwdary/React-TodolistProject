

import React from 'react'
import './Todolist.css'
const Todolist = ({Ttlist,dteele}) => {
  return (
    <div>
        {Ttlist.map((Todo, Index) => (
            <div key={Index}>
                <h5>{Todo} <button onClick={()=>dteele(Index)} id='detele'>Delete</button></h5>
            </div>
        ))}
    </div>
  );
};

export default Todolist