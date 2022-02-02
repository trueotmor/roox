import { memo, useState } from 'react';
import Title from '../common/title/title';
import { btnsData, formData, Page } from '../../consts/consts';
import { Button, Loading } from '../common/common';
import styles from './user-profile-screen.module.scss';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { User } from '../../types/user';
import { useForm } from 'react-hook-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type Props = {
  users: User[];
};

function UserProfileScreen({ users }: Props): JSX.Element {
  const [edit, setEdit] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const { userID } = useParams<{ userID: string }>();

  if (!users.length) {
    return <Loading />;
  }

  const currentUser = users.filter((user) => user.id.toString() === userID);

  if (!currentUser.length) {
    return <NotFoundScreen />;
  }

  const onEditClick = () => {
    setEdit(!edit);
  };

  const onFormSubmit = (data: any) => console.log(JSON.stringify(data), errors);

  return (
    <>
      <div className={styles['user-profile__header']}>
        <Title children={Page.userProfile} className={styles.title}></Title>
        <Button
          onClick={onEditClick}
          children={btnsData.edit.description}
          className={styles.button}
        ></Button>
      </div>
      <form method='POST' id='roox-form' onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.form}>
          {formData.map((item) => {
            const value = item.getValueFromResponse(currentUser[0]);
            return (
              <label className={styles.form__label} key={item.label}>
                <input
                  {...register(item.label, {
                    pattern: item.pattern,
                    required: true,
                  })}
                  data-name={item.label}
                  className={classNames(styles.form__input, {
                    [styles['form__input--error']]: errors?.[item.label],
                    [styles['form__input--locked']]: edit,
                  })}
                  readOnly={edit}
                  defaultValue={value}
                />
                {item.label}
              </label>
            );
          })}
          <label className={styles.form__label}>
            <textarea
              data-name={'Comment'}
              className={styles.form__comment}
              rows={2}
              readOnly={edit}
              maxLength={300}
              {...register('Comment')}
            />
            Comment
          </label>
        </div>

        <Button
          type='submit'
          className={classNames(styles.form__submit, {
            [styles['form__submit--lock']]: edit,
          })}
          children={btnsData.send.description}
          disabled={edit}
        ></Button>
      </form>
    </>
  );
}

export default memo(UserProfileScreen);
