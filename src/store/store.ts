import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './marketSlice';

export const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});

// Types export kar rahe hain taaki TypeScript khush rahe
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;