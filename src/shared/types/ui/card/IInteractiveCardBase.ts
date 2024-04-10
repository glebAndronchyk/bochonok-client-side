import {ICardBase} from "./ICardBase";
import {TParameterlessVoidFunction} from "../../misc";

export interface IInteractiveCardBase extends ICardBase {
  onClick?: TParameterlessVoidFunction;
}
