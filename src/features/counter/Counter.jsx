import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, reset, increByAmount } from './counterSlice'

const Counter = () => {
    const [incre, setIncre] = useState(0)
    const value=Number(incre) || 0
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    
    const resetAll = () => {
        setIncre(0)
        dispatch(reset())
    }
  return (
    <section>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button onClick={resetAll}>reset</button>

      <input
        type="text"
        value={incre}
        onChange={(e) => setIncre(e.target.value)}
      />
      <button onClick={() => dispatch(increByAmount(value))}>
        increByAmount
      </button>
    </section>
  );
}

export default Counter