import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// 1. Create State Interface
interface DemoState {
  product: number;
}

// 2. Create State Initial Value
const initialState: DemoState = {
  product: 0,
};

// 3. Create State Slice
const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    // 4. Define Payload Type
    add: (state, action: PayloadAction<number>) => {
      state.product += action.payload;
    },
  },
});

export const {add} = demoSlice.actions;

export default demoSlice.reducer;
