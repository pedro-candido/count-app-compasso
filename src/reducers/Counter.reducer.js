import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'CounterReducer',
    reducers: {
        sumValue(state) {
            state.value += 1
        },
        subtractValue(state) {
            state.value -= 1
        }
    }
})

export const { sumValue, subtractValue } = counterSlice.actions
export default counterSlice.reducer