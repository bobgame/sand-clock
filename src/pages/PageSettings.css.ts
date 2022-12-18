import { flexCenter, full, psa0 } from "../common/styles/common.css";

export const styles = {
  sandClockContainer: {
    extend: [full, psa0],
    backgroundColor: "#eee",
    color: '#333',
  },
  sandClockContent: {
    extend: [flexCenter],
    width: "100vw",
    height: "calc(100vh - 60px)",
    backgroundColor: "#eee",
  },
  settingContent: {
    width: "100vw",
    height: "calc(100vh - 60px)",
    backgroundColor: "#eee",
    padding: '0 20px',
  },
  settingContentTop: {
    extend: [flexCenter],
    height: "calc((100vh - 60px) / 2)",
  },
  SandClockBox: {
    extend: [flexCenter],
    width: '50%',
    height: "100%",
    transform: 'scale(0.45)',
  },
  colorContent: {
    width: "100%",
    height: "calc((100vh - 60px) / 2)",
    display: 'flex',
  },
  lineColorContent: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "50%",
    height: "100%",
  },
  bgColorContent: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "50%",
    height: "100%",
  },
  sandColorContent: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: "50%",
    height: "100%",
  },
  colorList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  colorItem: {
    width: '23%',
    height: 40,
    margin: '5px 2px',
    border: '2px solid #fff',
    boxShadow: '0 0 6px rgba(0,0,0,.3)'
  },
};
