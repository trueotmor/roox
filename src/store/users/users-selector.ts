import { FetchStatus, SortType } from '../../consts/consts';
import SliceNames from '../../consts/slice-names';
import { State } from '../../types/state';
import { Users } from '../../types/users';

export const getUsers = (state: State): Users => state[SliceNames.Users].users;
export const getFetchStatus = (state: State): FetchStatus =>
  state[SliceNames.Users].usersFetchStatus;
export const getSortType = (state: State): SortType =>
  state[SliceNames.Users].sortType;
