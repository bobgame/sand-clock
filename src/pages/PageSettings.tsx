import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";
import { SandClock } from "../components/SandClock";
import { ColorWidget } from "../components/ui/color/ColorWidget";
import { bgColors, lineColors, sandColors } from "../data/colors";
import { dbKey } from "../data/db-key";
import { styles } from "./PageSettings.css";

const PageSettings: React.FC = (props) => {
  const classes = createUseStyles(styles)();
  const history = useHistory();
  const {t} = useTranslation()

  const [lineColor, setLineColor] = useState("#666");
  const [bgColor, setBgColor] = useState("#eee");
  const [sandColor, setSandColor] = useState("#44cef6");

  useEffect(() => {
    const cacheLineColor = localStorage.getItem(dbKey.lineColor)
    if (cacheLineColor) {
      setLineColor(cacheLineColor)
    }
    const cacheBgColor = localStorage.getItem(dbKey.bgColor)
    if (cacheBgColor) {
      setBgColor(cacheBgColor)
    }
    const cacheSandColor = localStorage.getItem(dbKey.sandColor)
    if (cacheSandColor) {
      setSandColor(cacheSandColor)
    }
  }, [])

  const changeLineColor = (color: string) => {
    localStorage.setItem(dbKey.lineColor, color)
    setLineColor(color)
  }

  const changeBgColor = (color: string) => {
    localStorage.setItem(dbKey.bgColor, color)
    setBgColor(color)
  }

  const changeSandColor = (color: string) => {
    localStorage.setItem(dbKey.sandColor, color)
    setSandColor(color)
  }

  return (
    <div className={classes.sandClockContainer}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('menu.settings')}</IonTitle>
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
        <div className={classes.settingContent}>
          <div className={classes.settingContentLeft}>
            <div className={classes.SandClockBox}
              style={{
                backgroundColor: bgColor,
                borderColor: bgColor,
              }}>
              <SandClock
                clockLine={true}
                addClasses={{
                  topToBottom: false,
                  rotateStart: false,
                }}
                propStyle={{
                  lineColor,
                  bgColor,
                  sandColor,
                  currentTime: 10,
                  maxTime: 20,
                }}
              />
            </div>
          </div>
          <div className={classes.colorContent}>
            <div className={classes.lineColorContent}>
              <h4>{t('settings.lineColorTitle')}</h4>
              <div className={classes.colorList}>
                {lineColors.map((c, i) => {
                  return (
                    <div className={classes.colorItem} key={`line-color-key-${i}`}
                      onClick={() => { changeLineColor(c) }}>
                      <ColorWidget bgColor={c} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={classes.bgColorContent}>
              <h4>{t('settings.bgColorTitle')}</h4>
              <div className={classes.colorList}>
                {bgColors.map((c, i) => {
                  return (
                    <div className={classes.colorItem} key={`bg-color-key-${i}`}
                      onClick={() => { changeBgColor(c) }}>
                      <ColorWidget bgColor={c} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={classes.sandColorContent}>
              <h4>{t('settings.sandColorTitle')}</h4>
              <div className={classes.colorList}>
                {sandColors.map((c, i) => {
                  return (
                    <div className={classes.colorItem} key={`sand-color-key-${i}`}
                      onClick={() => { changeSandColor(c) }}>
                      <ColorWidget bgColor={c} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PageSettings