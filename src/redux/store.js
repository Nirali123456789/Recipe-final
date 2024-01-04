import { configureStore } from '@reduxjs/toolkit';
import preferenceReducers from './preferenceSlice'


 const store = configureStore({
  reducer: {
    preference: preferenceReducers
  },
});
export default store;


