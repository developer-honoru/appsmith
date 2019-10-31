import { Component } from "react";
import { PositionType, CSSUnit } from "../../constants/WidgetConstants";
import { Color } from "../../constants/Colors";

/***
 * Components are responsible for binding render inputs to corresponding UI SDKs
 */
abstract class BaseComponent<T extends ComponentProps> extends Component<T> {}

export interface BaseStyle {
  componentHeight: number;
  componentWidth: number;
  positionType: PositionType;
  xPosition: number;
  yPosition: number;
  xPositionUnit: CSSUnit;
  yPositionUnit: CSSUnit;
  heightUnit?: CSSUnit;
  widthUnit?: CSSUnit;
  backgroundColor?: Color;
  border?: string;
}

export interface ComponentProps {
  widgetId: string;
  widgetName?: string;
  style: BaseStyle;
  isDisabled?: boolean;
  isVisibile?: boolean;
}

export default BaseComponent;
