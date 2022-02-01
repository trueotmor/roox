/* eslint-disable no-useless-escape */
import { User } from '../types/user';

enum FetchStatus {
  Fetched = 'Fetched',
  Fetching = 'Fetching',
  Error = 'Error',
}

enum SortType {
  Default = 'default',
  City = 'city',
  Company = 'company',
}

const btnsData = {
  sort: [
    { type: SortType.City, description: 'по городу' },
    { type: SortType.Company, description: 'по компании' },
  ],
  edit: { description: 'Редактировать' },
  send: { description: 'Отправить' },
};

enum Page {
  usersList = 'Список пользователей',
  userProfile = 'Профиль пользователя',
}

const cardData = {
  name: 'ФИО: ',
  city: 'город: ',
  company: 'компания: ',
};

const formData = [
  {
    label: 'Name',
    getValueFromResponse: (object: User): string => object.name,
    pattern:
      /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/,
    validateMessage: 'Пример: Иван Иванов или Leanne Graham',
  },
  {
    label: 'User name',
    getValueFromResponse: (object: User): string => object.username,
    pattern: /(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)/,
    validateMessage: 'Пример: Ivan',
  },
  {
    label: 'E-mail',
    getValueFromResponse: (object: User): string => object.email,
    pattern:
      /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/,
    validateMessage: 'Пример: example@mail.com',
  },
  {
    label: 'Street',
    getValueFromResponse: (object: User): string => object.address.street,
    pattern: /^.*$/,
    validateMessage: 'Пример: ул. Пример',
  },
  {
    label: 'City',
    getValueFromResponse: (object: User): string => object.address.city,
    pattern: /^.*$/,
    validateMessage: 'Пример: Москва',
  },
  {
    label: 'Zip code',
    getValueFromResponse: (object: User): string => object.address.zipcode,
    pattern: /^.*$/,
    validateMessage: 'Пример: 1234234',
  },
  {
    label: 'Phone',
    getValueFromResponse: (object: User): string => object.phone,
    pattern: /^.*$/,
    validateMessage: 'Пример: 89991112233',
  },
  {
    label: 'Website',
    getValueFromResponse: (object: User): string => object.website,
    pattern: /^.*$/,
    validateMessage: 'Пример: www.expamle.com',
  },
];

const EMPTY_USERS_LIST_NOTICE = 'Sorry, the list of users is empty.';

export {
  FetchStatus,
  EMPTY_USERS_LIST_NOTICE,
  SortType,
  btnsData,
  Page,
  cardData,
  formData,
};
