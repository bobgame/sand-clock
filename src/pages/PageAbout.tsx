import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { AppConfig } from "../app-config";
import { styles } from "./PageSettings.css";

const PageAbout: React.FC = (props) => {
  const classes = createUseStyles(styles)();
  const history = useHistory();
  const {t} = useTranslation()

  return (
    <div className={classes.sandClockContainer}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('menu.about')}</IonTitle>
          <IonButtons slot="end"
            onClick={() => history.push("/page/sand-clock")}
            style={{ padding: '10px' }}>
            <IonIcon
              slot="end"
              ios={timerOutline}
              md={timerOutline}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div className={classes.sandClockContent}>
        <div style={{ padding: '30px 20px 10px', height: '100%', width: '100%', backgroundColor: '#fff' }}>
          <p>{t('about.hello')}</p>
          <p>{t('about.desc1')}</p>
          <p>{t('about.sourceTitle')}</p>
          <p><a href="https://github.com/bobgame/sand-clock" rel="noreferrer" target="_blank">https://github.com/bobgame/sand-clock</a></p>
          <p>{t('about.versionTitle')}{AppConfig.version}</p>
        </div>
      </div>
    </div>
  );
};

export default PageAbout