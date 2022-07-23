export interface SandClockPropsStyle {
  bgColor: string;
  lineColor: string;
  sandColor: string;
  currentTime: number;
  maxTime: number;
}
export interface SandClockPropsAddClass {
  topToBottom: boolean,
  rotateStart: boolean,
}
export interface SandClockProps {
  clockLine?: boolean;
  addClasses: SandClockPropsAddClass;
  propStyle: SandClockPropsStyle;
}
export interface ColorWidgetProp {
  bgColor: string;
}