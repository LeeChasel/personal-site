type Route = {
  label: string;
  path: string;
  index?: boolean;
}
const routes: Route[] = [
  {
    label: "Chasel's Site",
    path: '/',
    index: true,
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;