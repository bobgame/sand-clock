import { createUseStyles } from "react-jss";
import { ColorWidgetProp } from "../../../interface/SandClock.interface";

const useStyles = {
  colorWidgetContent: (props: ColorWidgetProp) => ({
    backgroundColor: props.bgColor,
    width: '100%',
    height: '100%',
  })
}

export const ColorWidget = (props: ColorWidgetProp) => {
  const classes = createUseStyles(useStyles)(props)
  return (
    <div className={classes.colorWidgetContent}>

    </div>
  )

}