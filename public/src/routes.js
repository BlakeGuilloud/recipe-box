import { App, LoginContainer } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: LoginContainer },
  // childRoutes: [
  //   { path: '/home', component: HomeContainer },
  // ],
};

export default routes;
