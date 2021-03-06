import dayjs from 'dayjs';

const FORMATER_TIME = 'HH:mm';

const FORMATER_DAY = 'MM-DD';

const FORMATER_DATE = 'YYYY-MM-DD';

const FORMATER_DATETIME = 'YYYY-MM-DD HH:mm:ss';

const format = (time: number, formater = FORMATER_DAY) => {
  return dayjs(time).format(formater);
};

export default {
  FORMATER_DAY,
  FORMATER_DATE,
  FORMATER_TIME,
  FORMATER_DATETIME,
  format,
};
