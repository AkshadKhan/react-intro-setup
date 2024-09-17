import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// document.getElementsByClassName('add').addEventListener('click',function(){
//   count+=1
// })


function App() {
  let [count, setCount] = useState(15)

  
  const add =(()=>{
    if(count!=25){
      count+=1
      setCount(count)
    }
  })

  const remove =(()=>{
    if(count!=0){
      count-=1
      setCount(count)
    }
    
  })

  return (
    <>
      <h1>React project</h1>
      <button className="add" onClick={add}>Add value</button> <br />
      <button className='remove' onClick={remove}>remove value</button>
      <h2>Counter value: {count}</h2>
    </>
  )
}

export default App
