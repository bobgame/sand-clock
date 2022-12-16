import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { PageAbout } from './pages/PageAbout';
import PageSandClock from './pages/PageSandClock';
import { PageSettings } from './pages/PageSettings';

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

export default App;
