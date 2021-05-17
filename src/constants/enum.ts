enum StorageKeys {
  USER_TOKEN = 'USERTOKEN',
}

enum SortRule {
  ASC = 'ASC',
  DESC = 'DESC',
  NONE = 'NONE',
}

enum SortField {
  NAME = 'NAME',
  PRICE = 'PRICE',
  CHANGE = 'CHANGE',
}

enum ResponseCode {
  SUCCESS = 200,
  FAILURE = 400,
  NOTAUTH = 401,
}

export {StorageKeys, ResponseCode, SortRule, SortField};
