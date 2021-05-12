import * as TYPES from '@/store/actions/types';

const initState = {
  favorites: [],
};

export default function ticker(state = initState, action: any) {
  switch (action.type) {
    case TYPES.TICKER_REQUEST:
      return {
        loading: true,
      };
    case TYPES.TICKER_SUCCESS:
      return {
        favorites: action.data,
      };
    case TYPES.TICKER_FAILED:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
