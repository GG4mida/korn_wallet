const formatProfitRatio = (ratio: string | number) => {
  if (!ratio) {
    return '0.00%';
  }
  const ratioNumber = (parseFloat(ratio + '') * 100).toFixed(2);
  return `${ratioNumber}%`;
};

const formatChange = (change: string) => {
  if (!change) {
    return '0.00%';
  }
  const changeNumber = parseFloat(change);
  const changeFormated = changeNumber.toFixed(2);

  if (changeNumber > 0) {
    return `+${changeFormated}%`;
  }

  return `${changeFormated}%`;
};

const formatNumber = (number: string) => {
  return (number + '').replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
};

const formatBigNumber = (volumn: string) => {
  const volumnNumber = parseFloat(volumn);
  const result: any = {};
  let k = 10000,
    sizes = ['', '万', '亿', '万亿'],
    i;
  if (volumnNumber < k) {
    result.value = volumnNumber;
    result.unit = '';
  } else {
    i = Math.floor(Math.log(volumnNumber) / Math.log(k));
    result.value = (volumnNumber / Math.pow(k, i)).toFixed(2);
    result.unit = sizes[i];
  }
  return result;
};

const formatAmount = (amount: string | number) => {
  const res = parseFloat(amount + '').toFixed(2);
  return res === '-0.00' ? '0.00' : res;
};

const fixed = (value: string | number, fixedNum = 2) => {
  return parseFloat(value + '').toFixed(fixedNum);
};

export default {
  formatProfitRatio,
  formatChange,
  formatBigNumber,
  formatNumber,
  formatAmount,
  fixed,
};
