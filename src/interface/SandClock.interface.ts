export interface SandClockPropsStyle {
  bgColor: string;
  lineColor: string;
  sandColor: string;
  currentTime: number;
  maxTime: number;
}
export interface SandClockProps {
  clockStatus: boolean;
  propStyle: SandClockPropsStyle;
}
export interface ColorWidgetProp {
  bgColor: string;
}