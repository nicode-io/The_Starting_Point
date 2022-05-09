import {configureStore} from '@reduxjs/toolkit';
import demoSlice from './slices/demoSlice';

// 1.  Create Store
const store = configureStore({
  reducer: {
    // CombineReducers under the hood
    demo: demoSlice,
  },
});

// 2. Export Dispatch and State Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
