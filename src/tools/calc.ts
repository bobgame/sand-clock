export const calcTimeText = (time: number) => {
  if (time <= 0) {
    return "00:00";
  }
  let m = 0;
  let s = time;
  if (time >= 60) {
    m = Math.floor(time / 60);
    s -= m * 60;
  }
  const mText = m > 9 ? `${m}` : `0${m}`;
  const sText = s > 9 ? `${Math.floor(s)}` : `0${Math.floor(s)}`;
  return `${mText}:${sText}`;
};

export const sample = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]
}