import { FetchStatus } from '../../consts/consts';

import { ServerRoute } from '../../consts/server-settings';

import { Users } from '../../types/users';
import { AsyncAction } from '../store';
import { loadUsers, setFetchStatus } from './users-data';

const fetchUsersAction = (): AsyncAction => {
  return async (dispatch, _getState, api) => {
    try {
      dispatch(setFetchStatus(FetchStatus.Fetching));
      const { data } = await api.get<Users>(ServerRoute.Users);

      dispatch(loadUsers(data));
    } catch (error) {
      dispatch(setFetchStatus(FetchStatus.Error));
    }
  };
};

export { fetchUsersAction };
