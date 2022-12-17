import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
  useIonPicker,
  IonIcon,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { SandClock } from "../components/SandClock";
import { dbKey } from "../data/db-key";
import { pickerTimeColumn } from "../data/picker-time";
import { calcTimeText, sample } from "../tools/calc";
import { styles } from "./PageSandClock.css";
import AudioPlayer from "react-h5-audio-player";
import { useScreenWakeLock } from 'screen-wake-lock';
import { customTimes } from "../data/custom-times";
import { settingsOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const audioNames = ["winter-1"];

const Player = (props: any) => (
  <AudioPlayer
    autoPlay={true}
    src={`assets/audio/${props.audioName}.aac`}
    onPlay={(e) => console.log("onPlay")}
  />
);

let clockTimer: any;

const PageSandClock: React.FC = (props) => {
  const classes = createUseStyles(styles)();
  const [present] = useIonPicker();
  const history = useHistory();

  const [rotateStart, setRotateStart] = useState(false);
  const [stopButtonEnabled, setStopButtonEnabled] = useState(false);

  const [playSound, setPlaySound] = useState(false);
  const [clockStatus, setClockStatus] = useState(false);
  const [clockLine, setClockLine] = useState(false);
  const [maxTime, setMaxTime] = useState(300);
  const [currentTime, setCurrentTime] = useState(0);
  // const [currentTimeText, setCurrentTimeText] = useState("00:00");
  // const [maxTimeText, setMaxTimeText] = useState("00:00");
  const [leftTimeText, setLeftTimeText] = useState("00:00");

  const intervalTime = 50;

  const [lineColor, setLineColor] = useState("#666");
  const [bgColor, setBgColor] = useState("#eee");
  const [sandColor, setSandColor] = useState("#44cef6");
  const [audioName, setAudioName] = useState("winter-1");

  const { t } = useTranslation();

  useScreenWakeLock()

  // useEffect(()=>{
  //   // i18n.changeLanguage('en');
  // },[])

  useEffect(() => {
    const cacheLineColor = localStorage.getItem(dbKey.lineColor);
    if (cacheLineColor) {
      setLineColor(cacheLineColor);
    }
    const cacheBgColor = localStorage.getItem(dbKey.bgColor);
    if (cacheBgColor) {
      setBgColor(cacheBgColor);
    }
    const cacheSandColor = localStorage.getItem(dbKey.sandColor);
    if (cacheSandColor) {
      setSandColor(cacheSandColor);
    }
  }, []);

  useEffect(() => {
    // setCurrentTime(0);
    // setClockStatus(true);
    return () => {
      stopClock();
    };
  }, []);

  // useEffect(() => {
  //   setCurrentTimeText(calcTimeText(currentTime));
  // }, [currentTime]);

  // useEffect(() => {
  //   setMaxTimeText(calcTimeText(maxTime));
  // }, [maxTime]);

  useEffect(() => {
    setLeftTimeText(calcTimeText(maxTime - currentTime + 1 - intervalTime / 1000));
  }, [currentTime, maxTime]);

  const downTime = () => {

    if (currentTime < maxTime) {
      setCurrentTime((t) => {
        if (t >= maxTime - intervalTime / 1000) {
          const audioNameTemp = sample(audioNames);
          setAudioName(audioNameTemp);
          setPlaySound(true);
          setClockStatus(false);
        }
        return t + intervalTime / 1000;
      });
    } else {
      setCurrentTime(maxTime)
    }
  };

  const startClock = () => {
    setStopButtonEnabled(false)
    setRotateStart(false)
    setClockLine(false)
    setTimeout(() => {
      setRotateStart(true)
      setTimeout(() => {
        setClockLine(true)
        clockTimer = setInterval(() => {
          downTime();
        }, intervalTime);
      }, 500);
    }, 100);
    setTimeout(() => {
      setStopButtonEnabled(true)
    }, 2000);
  };

  const stopClock = () => {
    if (clockTimer) {
      clearInterval(clockTimer);
      clockTimer = undefined;
    }
  };

  const retry = () => {
    setClockStatus(false);
    setCurrentTime(0);
    setClockStatus(true);
  };

  const customStartClock = () => {
    setTimeout(() => {
      retry()
    }, 0);
  }

  const customStopClock = () => {
    setTimeout(() => {
      setClockStatus(false)
    }, 0);
  }

  const preSelectPickerTime = () => {
    pickerTimeColumn[0].selectedIndex = 0;
    pickerTimeColumn[1].selectedIndex = 0;
    pickerTimeColumn[2].selectedIndex = 5;
  };

  const customMaxTime = (value: number) => {
    setTimeout(() => {
      setMaxTime(value)
      retry()
    }, 0);
  }

  const openPicker = async () => {
    preSelectPickerTime();
    present({
      columns: pickerTimeColumn,
      showBackdrop: true,
      buttons: [
        {
          text: t('cancel') + " X",
          role: "cancel",
        },
        {
          text: t('confirm') + " √",
          handler: (value) => {
            setMaxTime(
              value.hh.value * 3600 + value.mm.value * 60 + value.ss.value
            );
            retry();
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (clockStatus && currentTime === 0) {
      setPlaySound(false);
      console.log(`clockStatus: ${clockStatus} -> startClock`);
      startClock();
    } else if (!clockStatus) {
      console.log(`clockStatus: ${clockStatus} -> startClock`);
      stopClock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockStatus]);

  return (
    <div className={classes.sandClockContainer}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('title')}</IonTitle>
          <IonButtons slot="end"
            onClick={() => history.push("/page/settings")}
            style={{ padding: '10px' }}>
            <IonIcon
              slot="end"
              ios={settingsOutline}
              md={settingsOutline}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div
        className={classes.sandClockContent}
        style={{ backgroundColor: bgColor }}
      >
        <div>
          {playSound && (
            <div hidden>
              <Player audioName={audioName} />
            </div>
          )}
          {/* <div style={{ textAlign: "center", margin: 10, color: '#666' }}>
            {currentTimeText} / {maxTimeText}
          </div>
          <div className="time" hidden>
            <button onClick={retry}>retry</button>
          </div> */}
          <div>
            <SandClock
              clockLine={clockLine}
              addClasses={{
                topToBottom: true,
                rotateStart,
              }}
              propStyle={{
                bgColor,
                lineColor,
                sandColor,
                currentTime,
                maxTime,
              }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 10 }}>
            {!clockStatus && <IonButton style={{ margin: 10 }} size="large" onClick={customStartClock}>{t('sandClock.startCountdown')}</IonButton>}
            {clockStatus && <IonButton disabled={!stopButtonEnabled} style={{ margin: 10, width: '60%', }} size="large" onClick={customStopClock}>{t('sandClock.stopCountdown')}</IonButton>}
            {!clockStatus && <IonButton disabled={clockStatus} style={{ margin: 10, marginLeft: 30 }} size="large" onClick={openPicker}>{t('sandClock.customize')}</IonButton>}
          </div>



          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '10px 5%',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 20,
              textAlign: "center",
              color: '#666',
              width: 300,
              marginLeft: -150,
              fontSize: 60,
              visibility: clockStatus ? 'visible' : 'hidden'
            }}>{leftTimeText}</div>
            {
              customTimes.map(ct => {
                return <IonButton
                  style={{
                    margin: '2%',
                    width: '26%',
                    visibility: !clockStatus ? 'visible' : 'hidden'
                  }}
                  size="large"
                  fill="outline"
                  key={`custom-time-key-${ct.time}`}
                  onClick={() => customMaxTime(ct.time)}>{ct.text}</IonButton>
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default PageSandClock;
