import {Element} from "@progress/kendo-drawing";
import {BaseStreamItem} from "./BaseStreamItem";

export class SingleStreamItem extends BaseStreamItem {

    //Sure would be nice to have a Mono or Flux :)
    constructor(_element: Element[]) {
        super(_element);
    }
}