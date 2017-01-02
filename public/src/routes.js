import { App, HomeContainer, LoginContainer } from './containers';
import { AuthenticatedComponent } from './components';
const routes = {
  path: '/',
  component: App,
  indexRoute: { component: LoginContainer },
  childRoutes: [
    { path: '/home', component: AuthenticatedComponent(HomeContainer) },
  ],
};

export default routes;
