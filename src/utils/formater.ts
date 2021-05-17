const formatProfitRatio = (ratio: string) => {
  const ratioNumber = (Math.abs(parseFloat(ratio)) * 100).toFixed(2);
  return `${ratioNumber}%`;
};

export default {formatProfitRatio};
