import * as TYPES from './types';
import TickerService from '@/services/ticker';

const getFavorites = () => {
  return (dispatch: any) => {
    dispatch(request());

    TickerService.getFavorites().then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error.toString()));
      },
    );
  };

  function request() {
    return {type: TYPES.TICKER_REQUEST};
  }
  function success(data: any) {
    return {type: TYPES.TICKER_SUCCESS, data};
  }
  function failure(error: any) {
    return {type: TYPES.TICKER_FAILED, error};
  }
};

export default {
  getFavorites,
};
