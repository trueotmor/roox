import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../consts/app-routes';

import { cardData } from '../../../../consts/consts';
import { User } from '../../../../types/user';

import { UserCardInner } from '../../../common/common';
import styles from './user-card.module.scss';

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps): JSX.Element {
  const { name, address, company, id } = user;

  return (
    <li className={styles['user-card']}>
      <ul className={styles['user-card__info-list']}>
        <li>
          <UserCardInner
            children={cardData.name}
            className={styles['user-card__point-text']}
          ></UserCardInner>
          <UserCardInner
            children={name}
            className={styles['user-card__inner-text']}
          ></UserCardInner>
        </li>
        <li>
          <UserCardInner
            children={cardData.city}
            className={styles['user-card__point-text']}
          ></UserCardInner>
          <UserCardInner
            children={address.city}
            className={styles['user-card__inner-text']}
          ></UserCardInner>
        </li>
        <li>
          <UserCardInner
            children={cardData.company}
            className={styles['user-card__point-text']}
          ></UserCardInner>
          <UserCardInner
            children={company.name}
            className={styles['user-card__inner-text']}
          ></UserCardInner>
        </li>
      </ul>
      <Link
        to={AppRoute.getUserLink(id.toString())}
        className={styles['user-card__link']}
      >
        Подробнее
      </Link>
    </li>
  );
}

export default memo(UserCard);
