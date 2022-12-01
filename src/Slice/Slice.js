// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   value: 0,
// };
// const CounterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       if (action.payload === "") {
//         state.value += 1;
//       } else if (action.payload !== "") {
//         state.value = state.value + action.payload;
//       }
//     },
//     decrement: (state, action) => {
//       if (action.payload === "") {
//         state.value -= 1;
//       } else if (action.payload !== "") {
//         state.value -= action.payload;
//       }
//     },
//     addByValue: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });
// export const { increment, decrement, addByValue } = CounterSlice.actions;
// export default CounterSlice.reducer;
