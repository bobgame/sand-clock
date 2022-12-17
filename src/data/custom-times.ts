import i18next from "../i18n";

const minText = i18next.t('sandClock.minute')

export const customTimes = [
  // {time: 60, text: '01分钟'},
  {time: 120, text: '2 ' + minText},
  {time: 180, text: '3 ' + minText},
  {time: 300, text: '5 ' + minText},
  {time: 600, text: '10 ' + minText},
  {time: 900, text: '15 ' + minText},
  {time: 1200, text: '20 ' + minText},
]
// export const customTimes = [
//   {time: 60, text: '00:10'},
//   {time: 120, text: '02:00'},
//   {time: 180, text: '03:00'},
//   {time: 300, text: '05:00'},
//   {time: 600, text: '10:00'},
//   {time: 900, text: '15:00'},
// ]