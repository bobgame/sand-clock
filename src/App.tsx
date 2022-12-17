import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { Redirect, Route } from 'react-router-dom';

const Menu = lazy(() => import('./components/Menu'))
const PageSandClock = lazy(() => import('./pages/PageSandClock'))
const PageAbout = lazy(() => import('./pages/PageAbout'))
const PageSettings = lazy(() => import('./pages/PageSettings'))

setupIonicReact();


const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactHashRouter basename={process.env.PUBLIC_URL}>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/sand-clock" />
            </Route>
            <Route path="/page/sand-clock" exact={true}>
              <PageSandClock />
            </Route>
            <Route path="/page/settings" exact={true}>
              <PageSettings />
            </Route>
            <Route path="/page/about" exact={true}>
              <PageAbout />
            </Route>
            <Redirect to='/' />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default withTranslation()(App);
