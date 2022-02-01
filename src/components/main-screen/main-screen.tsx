import { Redirect } from 'react-router-dom';
import { AppRoute } from '../../consts/app-routes';

function MainScreen(): JSX.Element {
  return <Redirect to={AppRoute.UsersList} />;
}

export default MainScreen;
