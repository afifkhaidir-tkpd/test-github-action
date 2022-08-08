import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import Home from './Home/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'route',
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
];

export default ROUTES;
