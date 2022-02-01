import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../../../consts/app-routes';
import { fetchUsersAction } from '../../../../store/users/users-api';
import { getUsers } from '../../../../store/users/users-selector';
import MainScreen from '../../../main-screen/main-screen';
import NotFoundScreen from '../../../not-found-screen/not-found-screen';
import UserProfileScreen from '../../../user-profile-screen/user-profile-screen';
import UsersListScreen from '../../../users-list-screen/users-list-screen';

function Routes(): JSX.Element {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.UsersList}>
        <UsersListScreen users={users} />
      </Route>
      <Route exact path={AppRoute.UserProfile}>
        <UserProfileScreen users={users} />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
      <Redirect exact from={AppRoute.Main} to={AppRoute.UsersList} />
    </Switch>
  );
}

export default Routes;
