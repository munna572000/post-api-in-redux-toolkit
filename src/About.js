import React from 'react'
import {increment , decrement ,  incrementByUser} from './components/counterSlice'
import {useSelector , useDispatch} from'react-redux'

function About() {
    const dispatch = useDispatch();
    const count = useSelector((state)=>
        state.counter.value)
       
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button  onClick={() => dispatch(decrement())}>Decrement</button>
    <button  onClick={()=>dispatch(incrementByUser(4))}>IncByuser</button>
    </>
  )
}

export default About
