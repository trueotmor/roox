import { btnsData } from '../../../../consts/consts';
import Button from '../../../common/button/button';
import styles from './sidebar.module.scss';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeSortType } from '../../../../store/users/users-data';

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();
  const onSortClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const sortType = evt.currentTarget.dataset.type;
    if (!sortType) {
      return;
    }

    dispatch(changeSortType(sortType));
  };
  return (
    <div className={styles.sidebar}>
      <h2 className={styles['sidebar__title']}>Сортировка</h2>
      {btnsData.sort.map((type) => {
        return (
          <Button
            className={styles['sidebar__button']}
            key={type.description}
            children={type.description}
            onClick={onSortClick}
            data-type={type.type}
          ></Button>
        );
      })}
    </div>
  );
}

export default Sidebar;
