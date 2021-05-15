import * as TYPES from '@/store/actions/types';
import {Storage} from '@/utils';
import {StorageKeys} from '@/constants/enum';

const initState = {};

export default function account(state = initState, action: any) {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case TYPES.LOGIN_SUCCESS:
      const {
        data: {token},
      } = action;

      Storage.setItem(StorageKeys.USER_TOKEN, token);

      return {
        token,
      };
    case TYPES.LOGIN_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
