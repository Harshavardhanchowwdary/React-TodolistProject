import React from 'react'
// import { team } from './Data/Datafile'
import './App.css'
// import Sample from './Sample'
import Todoapp from './Todoapp'
function App() {
  return (
    <div>
      <h1>Main Component</h1>
    {/* {
      team.map(menber=>{
        return <Sample name={menber.name} role = {menber.role} exp = {menber.Exp} img = {menber.imgsrc}/>
      }) 
    } */}
    <Todoapp/>
    </div>
  )
}

export default App