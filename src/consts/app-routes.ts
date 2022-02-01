const AppRoute = {
  Main: '/',
  UsersList: '/users',
  UserProfile: '/profile/:userID',
  getUserLink: (userID: string): string => `/profile/${userID}`,
};

export { AppRoute };
