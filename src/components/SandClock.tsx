import { createUseStyles } from "react-jss";
import { styles } from "./SandClock.css";
import { SandClockProps } from "../interface/SandClock.interface";

export const SandClock = (props: SandClockProps) => {
  const classes = createUseStyles(styles)(props.propStyle);

  return (
    <div className={`
      ${classes.sandClock} 
      ${props.addClasses.topToBottom ? classes.topToBottom : ''} 
      ${props.addClasses.rotateStart ? classes.rotateStart : ''} 
    `}>
      <div className={classes.sandTop}></div>
      {props.clockLine && <div className={classes.sandLine}></div>}
      <div className={classes.sandBottom}></div>
      <div className={classes.sandClockTop}></div>
      <svg
        style={{ width: 200, zIndex: 9, position: 'relative' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 788 1368"
      >
        <polygon
          points="727 432 529 585 394 672.35 259 585 61 432 0 288 0 670.5 0 1053 70 918 322 729 394 693 466 729 718 918 788 1053 788 670.5 788 288 727 432"
          style={{ fill: props.propStyle.bgColor }}
        />
        <path
          d="M1384,613V288h-50V613a150.94,150.94,0,0,1-61.6,121.41L990,941h0L707.6,734.39A150.94,150.94,0,0,1,646,613V288H596V613a201.08,201.08,0,0,0,82.08,161.76L947.66,972,678.08,1169.26A201.08,201.08,0,0,0,596,1331v325h50V1331a150.94,150.94,0,0,1,61.6-121.41L990,1003h0l282.4,206.63A150.94,150.94,0,0,1,1334,1331v325h50V1331a201.08,201.08,0,0,0-82.08-161.76L1032.34,972l269.58-197.26A201.08,201.08,0,0,0,1384,613Z"
          transform="translate(-596 -288)"
          style={{ fill: props.propStyle.lineColor }}
        />
      </svg>
      <div className={classes.sandClockTop}></div>
    </div>
  );
};
