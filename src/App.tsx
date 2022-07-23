import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import PageSandClock from './pages/PageSandClock';
import { PageSettings } from './pages/PageSettings';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
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
            <Redirect to='/' />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
