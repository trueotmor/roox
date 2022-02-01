import { memo } from 'react';
import styles from './users-list-screen.module.scss';
import UserCard from './components/user-card/user-card';
import Title from '../common/title/title';
import { Page, SortType } from '../../consts/consts';
import { User } from '../../types/user';
import { Loading } from '../common/common';
import { useSelector } from 'react-redux';
import { getSortType } from '../../store/users/users-selector';

type Props = {
  users: User[];
};

function UsersListScreen({ users }: Props): JSX.Element {
  const sortType = useSelector(getSortType);

  const getSortedUsers = (
    users: User[],
    sortType = SortType.Default,
  ): User[] => {
    let switchUsers = [...users];
    switch (sortType) {
      case SortType.Default:
        return switchUsers;
      case SortType.Company:
        return switchUsers.sort((a: User, b: User) =>
          a.company.name < b.company.name ? -1 : 1,
        );
      case SortType.City:
        return switchUsers.sort((a: User, b: User) =>
          b.address.city > a.address.city ? -1 : 1,
        );
    }
  };

  const sortedUsers = getSortedUsers(users, sortType);
  console.log(sortedUsers);

  if (!users.length) {
    return <Loading />;
  }

  return (
    <>
      <Title children={Page.usersList} className={styles.title}></Title>
      <ul className={styles['users-list']}>
        {sortedUsers.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </ul>
      <p className={styles['total-users']}>
        Найдено {users.length} пользователей
      </p>
    </>
  );
}

export default memo(UsersListScreen);
