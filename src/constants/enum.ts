enum StorageKeys {
  USER_TOKEN = 'USERTOKEN',
  THEME_TYPE = 'THEMETYPE',
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

enum CoinOpDirection {
  BUYIN = 1,
  SELL = -1,
}

enum ThemeType {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export {
  StorageKeys,
  ResponseCode,
  SortRule,
  SortField,
  CoinOpDirection,
  ThemeType,
};
