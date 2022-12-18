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
    transform: 'scale(1)',
    '@media screen and (max-width: 350px)': {
      transform: 'scale(0.9)',
    },
    '@media screen and (max-width: 300px)': {
      transform: 'scale(0.8)',
    },
    '@media screen and (max-width: 250px)': {
      transform: 'scale(0.7)',
    },
    '@media screen and (max-height: 800px)': {
      transform: 'scale(0.9)',
    },
    '@media screen and (max-height: 700px)': {
      transform: 'scale(0.8)',
    },
    '@media screen and (max-height: 600px)': {
      transform: 'scale(0.6)',
    }
  },
};
