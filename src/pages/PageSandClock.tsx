import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
  useIonPicker,
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

const audioNames = ["winter-1", "bob-1", "often-1", "waipo-1"];

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

  const [playSound, setPlaySound] = useState(false);
  const [clockStatus, setClockStatus] = useState(false);
  const [maxTime, setMaxTime] = useState(5);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeText, setTimeText] = useState("00:00");

  const intervalTime = 50;

  const [lineColor, setLineColor] = useState("#aaa");
  const [bgColor, setBgColor] = useState("#eee");
  const [sandColor, setSandColor] = useState("#ccc");
  const [audioName, setAudioName] = useState("winter-1");

  useScreenWakeLock()

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

  useEffect(() => {
    setTimeText(calcTimeText(currentTime));
  }, [currentTime]);

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
    }
  };

  const startClock = () => {
    clockTimer = setInterval(() => {
      downTime();
    }, intervalTime);
  };

  const stopClock = () => {
    if (clockTimer) {
      clearInterval(clockTimer);
      clockTimer = null;
    }
  };

  const retry = () => {
    setClockStatus(false);
    setCurrentTime(0);
    setClockStatus(true);
  };

  const preSelectPickerTime = () => {
    pickerTimeColumn[0].selectedIndex = 0;
    pickerTimeColumn[1].selectedIndex = 5;
    pickerTimeColumn[2].selectedIndex = 0;
  };

  const openPicker = async () => {
    preSelectPickerTime();
    present({
      columns: pickerTimeColumn,
      showBackdrop: true,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
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
          <IonTitle>Sand Clock</IonTitle>
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
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <IonButton onClick={openPicker}>开始倒计时7</IonButton>
          </div>
          <div className="time" hidden>
            {currentTime}
          </div>
          <div className="time" hidden>
            {timeText}
          </div>
          <div className="time" hidden>
            <button onClick={retry}>retry</button>
          </div>
          <div>
            <SandClock
              clockStatus={clockStatus}
              propStyle={{
                bgColor,
                lineColor,
                sandColor,
                currentTime,
                maxTime,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSandClock;
