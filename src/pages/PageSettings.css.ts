import { flexCenter, full, psa, psa0 } from "../common/styles/common.css";

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
  settingContent: {
    display: "flex",
    width: "100vw",
    height: "calc(100vh - 60px)",
    backgroundColor: "#eee",
  },
  settingContentLeft: {
    extend: [flexCenter],
    flex: "0 0 220px",
    height: "100%",
  },
  SandClockBox: {
    extend: [flexCenter, psa],
    borderWidth: 20,
    borderStyle: 'solid',
    borderRadius: 10,
    transform: 'scale(0.6)',
  },
  colorContent: {
    width: "100%",
    height: "100%",
    paddingTop: '5%',
    paddingRight: '5%',
  },
  lineColorContent: {
    width: "100%",
    height: "30%",
  },
  bgColorContent: {
    width: "100%",
    height: "30%",
  },
  sandColorContent: {
    width: "100%",
    height: "30%",
  },
  colorList: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  colorItem: {
    width: '24%',
    height: 40,
    margin: 5,
    border: '2px solid #fff',
    boxShadow: '0 0 6px rgba(0,0,0,.3)'
  },
};
