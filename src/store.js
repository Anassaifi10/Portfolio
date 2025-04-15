import { configureStore } from '@reduxjs/toolkit';
import  positionsReducer  from './features/positionSlice';

 const store = configureStore({
  reducer: {
    position:positionsReducer
  },
});

export default store;