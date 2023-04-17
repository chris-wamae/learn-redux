import {useSelector,useDispatch} from "react-redux"
import { increment, decrement, reset, increaseByAmount } from "./counterSlice"
import { useState } from "react"

function Counter(){
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    const [increaseAmount,setIncreaseAmount] = useState(0)
    const isNumber = Number(increaseAmount) || 0;  

    return(
        <div>
        <div>{count}</div>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
            <input type="text" onChange={(e) => setIncreaseAmount(e.target.value)}></input>
            <button onClick={() => {dispatch(increaseByAmount(isNumber))}}>Increase by: {increaseAmount}</button>
            </div>
         
            <button onClick={() => {dispatch(reset())
                setIncreaseAmount(0)}}>Reset</button>

        </div>
        </div>
    )
}

export default Counter;