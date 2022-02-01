import { combineReducers } from '@reduxjs/toolkit';
import SliceNames from '../consts/slice-names';
import { usersReducer } from './users/users-data';

export const rootReducer = combineReducers({
  [SliceNames.Users]: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
