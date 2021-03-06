import {Component, OnInit} from '@angular/core';
import {SingleStreamItem} from '../../../stream/SingleStreamItem';
import {StreamItem} from '../../../stream/StreamItem';
import {Function} from '../../../stream/Function';
import {SquareStreamItemService} from '../../../stream/SquareStreamItemService';
import {CircleStreamItemService} from '../../../stream/CircleStreamItemService';
import {TriangleStreamItemService} from '../../../stream/TriangleStreamItemService';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {RanboShapeOptionsService} from '../../../stream/RanboShapeOptionsService';
import {ImageUtility} from '../../../utilities/ImageUtility';
import {NavigationEnd, Router} from '@angular/router';
import {StreamElement} from '../../../stream/Types';

@Component({
    selector: 'cold-sequence-view',
    template: require('./cold-sequence.view.component.htm')
})
export class ColdSequenceViewComponent implements OnInit {

    private static numItems = 6;

    list: StreamItem;
    mapOne: Function<StreamItem, StreamItem> = {
        apply: (streamItem: StreamItem) => new SingleStreamItem(
            streamItem.element.map((element: StreamElement) => this.hip2B.createShape(() => {
                    return {
                        fill: element.options.fill,
                        stroke: element.options.stroke,
                    }
                })
            ))
    };

    sourcePicture = ImageUtility.circleSource;
    mapPicture = ImageUtility.circleSquare;
    subscribers: number[] = [1];
    private sourceOutputSubject = new BehaviorSubject(null);
    sourceOutput = this.sourceOutputSubject.filter(item => !!item);
    private streamSourceInputSubject = new BehaviorSubject<StreamItem>(null);
    streamSourceInput = this.streamSourceInputSubject.filter(item => !!item);
    private listIndex = -1;

    constructor(private triangleFactory: TriangleStreamItemService,
                private hip2B: SquareStreamItemService,
                private circleService: CircleStreamItemService,
                private router: Router) {
    }

    private _itemsToMoveAlong: StreamItem[] = [];

    get itemsToMoveAlong(): StreamItem[] {
        return this._itemsToMoveAlong;
    }

    set itemsToMoveAlong(value: StreamItem[]) {
        this._itemsToMoveAlong = value;
    }

    ngOnInit(): void {
        this.list = this.circleService.createStreamItems(ColdSequenceViewComponent.numItems, RanboShapeOptionsService.createStreamOption)
        this.list.element
            .map(el => [el])
            .map(element => new SingleStreamItem(element))
            .forEach(item => this._itemsToMoveAlong.push(item));
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    sourceComplete(item: StreamItem) {
        this.sourceOutputSubject.next(item);
    }

    mapOneComplete(steamItem: StreamItem) {
        this.startStreamOne()
    }

    addSubscriber(): void {
        this.subscribers.push(1)
    }

    startStreamOne(): void {
        let itemIndex = this.listIndex = ++this.listIndex % ColdSequenceViewComponent.numItems;
        this.streamSourceInputSubject.next(this._itemsToMoveAlong[itemIndex]);
    }

}
