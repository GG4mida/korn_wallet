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

export {tickerTab, tickerTabs};
