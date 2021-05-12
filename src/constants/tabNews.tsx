enum Navigation {
  News = 0,
  Article,
  Twitter,
}

const NavigationTabs = [
  {
    name: '资讯',
    value: Navigation.News,
  },
  {
    name: '文章',
    value: Navigation.Article,
  },
  {
    name: '推特',
    value: Navigation.Twitter,
  },
];

export {Navigation, NavigationTabs};
