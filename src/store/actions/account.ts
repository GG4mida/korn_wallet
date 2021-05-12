import * as TYPES from './types';
import AccountService from '@/services/account';

const login = (username: string, password: string) => {
  return (dispatch: any) => {
    dispatch(request());

    AccountService.login(username, password).then(
      (user: any) => {
        dispatch(success(user));
      },
      (error: any) => {
        dispatch(failure(error.toString()));
      },
    );
  };

  function request() {
    return {type: TYPES.LOGIN_REQUEST};
  }
  function success(user: any) {
    return {type: TYPES.LOGIN_SUCCESS, user};
  }
  function failure(error: any) {
    return {type: TYPES.LOGIN_FAILURE, error};
  }
};

export default {
  login,
};
