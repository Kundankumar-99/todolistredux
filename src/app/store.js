import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../features/Todo/todoslice'

export const store = configureStore({

reducer : todoReducers

})

