enum tickerTab {
  ALL = 'ALL',
  FAVORITES = 'FAVORITES',
}

const tickerTabs = [
  {
    name: tickerTab.ALL,
    label: '所有',
  },
  {
    name: tickerTab.FAVORITES,
    label: '自选',
  },
];

enum klineTab {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
  ALL = 'ALL',
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
  {
    name: klineTab.ALL,
    label: '所有',
  },
];

export {tickerTab, tickerTabs, klineTab, klineTabs};
