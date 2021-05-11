const formatChange = (val: number) => {
  if (val > 0) {
    return `${val}%`;
  }

  if (val < 0) {
    return `${Math.abs(val)}%`;
  }

  return '0.00%';
};

export {formatChange};
