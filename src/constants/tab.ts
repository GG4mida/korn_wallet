enum coinTab {
  ALL = 'ALL',
  FAVORITES = 'FAVORITES',
}

const coinTabs = [
  {
    name: coinTab.ALL,
    label: '所有',
  },
  {
    name: coinTab.FAVORITES,
    label: '自选',
  },
];

enum klineTab {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

const klineTabs = [
  {
    name: klineTab.DAY,
    label: '日',
  },
  {
    name: klineTab.WEEK,
    label: '周',
  },
  {
    name: klineTab.MONTH,
    label: '月',
  },
  {
    name: klineTab.YEAR,
    label: '年',
  },
];

export {coinTab, coinTabs, klineTab, klineTabs};
