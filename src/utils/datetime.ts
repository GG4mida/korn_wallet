import dayjs from 'dayjs';

const FORMATTER_TIME = 'hh:mm';

const FORMATER_DAY = 'MM-DD';

const format = (time: number, formater = FORMATER_DAY) => {
  return dayjs(time).format(formater);
};

export default {
  FORMATER_DAY,
  FORMATTER_TIME,
  format,
};
