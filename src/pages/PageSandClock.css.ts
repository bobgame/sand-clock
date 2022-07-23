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
};
