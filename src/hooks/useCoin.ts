import {useSelector} from 'react-redux';
import {find} from 'lodash';

const useCoin = (symbol: string) => {
  const {info: userInfo} = useSelector((state: any) => state.user);
  const {balance_current} = userInfo;
  const {list: marketList} = useSelector((state: any) => state.market);
  const marketInfo = marketList[symbol];
  const {c: marketPrice} = marketInfo;
  const {holds: userHolds} = useSelector((state: any) => state.user);
  const userHoldItem = find(
    userHolds,
    (item: any) => item.coin.symbol === symbol,
  );
  const volumn = userHoldItem?.volumn || 0;
  return {
    user_balance: balance_current,
    coin_symbol: symbol,
    coin_price: marketPrice,
    coin_hold_volumn: volumn,
  };
};

export default useCoin;
