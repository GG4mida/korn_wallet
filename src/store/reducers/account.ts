import * as TYPES from '@/store/actions/types';

export default function account(state = {}, action: any) {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        token: action.token,
      };
    case TYPES.LOGIN_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
