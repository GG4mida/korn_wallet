const formatProfitRatio = (ratio: string) => {
  if (!ratio) {
    return '0.00%';
  }
  const ratioNumber = (Math.abs(parseFloat(ratio)) * 100).toFixed(2);
  return `${ratioNumber}%`;
};

const formatTickerChange = (change: string) => {
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

export default {formatProfitRatio, formatTickerChange};
