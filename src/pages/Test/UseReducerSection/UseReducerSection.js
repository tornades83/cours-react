import React, { useReducer} from 'react'


function reducer(state, action) {
    switch (action.type) {
        case "increment":
            if (state.count >= 10 ) {
                return {count : 0 }
            }
            return {count : state.count + 1 }
        case "decrement":
            return {count : state.count - 1 }
        case "reset":
            return {count : count.count }
    
        default:

    }
}

let count = {count : 0}

const UseReducerSection = () => {
    
    const [state, dispatch] = useReducer(reducer, count)

  return (
    <div className='container m-5 p-5 '>
      Hello useReducer
      Count : <h1>{state.count}</h1> 
      <button className='btn btn-success' onClick={()=> dispatch({type : "increment"})}>Incrementer + </button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : "decrement"})}>Decrementer - </button>
      <button className='btn btn-danger' onClick={()=> dispatch({type : "reset"})}>Reset  </button>
      
    </div> 
  )
}

export default UseReducerSection
