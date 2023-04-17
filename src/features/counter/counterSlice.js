import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) =>{
            state.count = 0
        },
        increaseByAmount: (state,amount) => {
           state.count += amount.payload
        }
    }
})

export const { increment, decrement, reset, increaseByAmount} = counterSlice.actions;

export default counterSlice.reducer;

const names = [{firstName:"John"},
               {firstName:"Jake"},
               {firstName:"Joel"}]
const alsoNames = [{firstName:"John"},
                   {firstName:"Jake"},
                   {firstName:"Joel"}]

const found = names.filter(name => {
  let onlyNames = alsoNames.map(name => name.firstName)
 return name.firstName
})