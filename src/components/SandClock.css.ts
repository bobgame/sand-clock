import { flexCenter, full, psa, psa0 } from "../common/styles/common.css";
import { SandClockPropsStyle } from "../interface/SandClock.interface";
const $topHeight = 18;
export const styles = {
  sandClockContainer: {
    extend: [full, psa0],
    backgroundColor: "#eee",
  },
  sandClockContent: {
    extend: [flexCenter],
    width: "100vw",
    height: "calc(100vh - 60px)",
    backgroundColor: "#eee",
  },
  sandClock: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topToBottom: {
    transform: 'rotate(180deg)',
  },
  rotateStart: {
    transform: 'rotate(360deg)',
    transition: 'all .5s'
  },
  sandTop: (props: SandClockPropsStyle) => ({
    extend: [psa],
    zIndex: 1,
    width: 190,
    height: 166 - (166 * props.currentTime / props.maxTime),
    top: $topHeight + (166 * props.currentTime / props.maxTime),
    left: '50%',
    marginLeft: -95,
    backgroundColor: props.sandColor,
  }),
  sandLine: (props: SandClockPropsStyle) => ({
    extend: [psa],
    zIndex: 1,
    width: 2,
    height: 165,
    top: $topHeight + 182,
    left: '50%',
    marginLeft: -1,
    backgroundColor: props.sandColor,
  }),
  sandBottom: (props: SandClockPropsStyle) => ({
    extend: [psa],
    zIndex: 1,
    width: 190,
    height: 166 * props.currentTime / props.maxTime,
    top: $topHeight + 182 + (166 - 166 * props.currentTime / props.maxTime),
    left: '50%',
    marginLeft: -95,
    backgroundColor: props.sandColor,
  }),
  sandClockTop: (props: any) => ({
    position: 'relative',
    zIndex: 2,
    backgroundColor: props.lineColor,
    width: 210,
    height: $topHeight,
    borderRadius: 6,
  }),
  sandClockBottom: {},
};
