import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, SortType } from '../../consts/consts';
import SliceNames from '../../consts/slice-names';

const initialState = {
  users: [],
  usersFetchStatus: FetchStatus.Fetched,
  sortType: SortType.Default,
};

const userSlice = createSlice({
  name: SliceNames.Users,
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload;
      state.usersFetchStatus = FetchStatus.Fetched;
    },
    setFetchStatus: (state, action) => {
      state.usersFetchStatus = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const usersReducer = userSlice.reducer;
export const { loadUsers, setFetchStatus, changeSortType } = userSlice.actions;
