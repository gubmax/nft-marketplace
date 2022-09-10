import { RouteObject } from 'react-router-dom';

import { AboutPage } from 'client/modules/pages/about';
import { HomePage } from 'client/modules/pages/home';

interface Route extends RouteObject {
  path: string;
  name: string;
}

export const routes: Route[] = [
  { path: '/', name: 'home', element: <HomePage /> },
  { path: '/about', name: 'about', element: <AboutPage /> },
];
