const formatProfitRatio = (ratio: string) => {
  const ratioNumber = (Math.abs(parseFloat(ratio)) * 100).toFixed(2);
  return `${ratioNumber}%`;
};

const formatTickerChange = (change: string) => {
  const changeNumber = parseFloat(change);
  const changeFormated = changeNumber.toFixed(2);

  if (changeNumber > 0) {
    return `+${changeFormated}%`;
  }

  return `${changeFormated}%`;
};

export default {formatProfitRatio, formatTickerChange};
