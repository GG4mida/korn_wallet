import * as TYPES from './types';
import {ResponseCode} from '@/constants/enum';
import AccountService from '@/services/account';

const login = (username: string, password: string) => {
  return (dispatch: any) => {
    dispatch(request());
    return AccountService.login(username, password).then(
      (data: any) => {
        const {code, content} = data;
        if (code === ResponseCode.SUCCESS) {
          dispatch(success(content));
        } else {
          dispatch(failure(content));
        }
        return content;
      },
      (error: any) => {
        dispatch(failure(error.toString()));
        return error;
      },
    );
  };

  function request() {
    return {type: TYPES.LOGIN_REQUEST};
  }
  function success(data: any) {
    return {type: TYPES.LOGIN_SUCCESS, data};
  }
  function failure(error: any) {
    return {type: TYPES.LOGIN_FAILURE, error};
  }
};

export default {
  login,
};
