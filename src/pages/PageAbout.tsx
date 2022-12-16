import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { AppConfig } from "../app-config";
import { styles } from "./PageSettings.css";

export const PageAbout: React.FC = (props) => {
  const classes = createUseStyles(styles)();
  const history = useHistory();

  return (
    <div className={classes.sandClockContainer}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>关于</IonTitle>
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
          <p>大家好，我是 BobGame</p>
          <p>这个沙漏是一个学习产物，已开源。</p>
          <p>开源链接：</p>
          <p><a href="https://github.com/bobgame/sand-clock" rel="noreferrer" target="_blank">https://github.com/bobgame/sand-clock</a></p>
          <p>版本号：{AppConfig.version}</p>
        </div>
      </div>
    </div>
  );
};

