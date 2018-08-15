"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SingleStreamItem_1 = require("../../../stream/SingleStreamItem");
var SquareStreamItemService_1 = require("../../../stream/SquareStreamItemService");
var CircleStreamItemService_1 = require("../../../stream/CircleStreamItemService");
var TriangleStreamItemService_1 = require("../../../stream/TriangleStreamItemService");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var RanboShapeOptionsService_1 = require("../../../stream/RanboShapeOptionsService");
var ImageUtility_1 = require("../../../utilities/ImageUtility");
var rxjs_1 = require("rxjs");
var ZipWithViewComponent = /** @class */ (function () {
    function ZipWithViewComponent(triangleFactory, hip2B, circleService) {
        var _this = this;
        this.triangleFactory = triangleFactory;
        this.hip2B = hip2B;
        this.circleService = circleService;
        this.mapOne = {
            apply: function (streamItem, otherStreamItem) {
                return new SingleStreamItem_1.SingleStreamItem(streamItem.element.map(function () { return _this.hip2B.createShape(function () {
                    return {
                        fill: otherStreamItem.element[0].options.get('fill'),
                        stroke: otherStreamItem.element[0].options.get('stroke'),
                    };
                }); }));
            }
        };
        this.sourcePicture = ImageUtility_1.ImageUtility.circleSource;
        this.mapPicture = ImageUtility_1.ImageUtility.circleSquare;
        this.itemsToMoveAlong = [];
        this.sourceOutputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutput = this.sourceOutputSubject.filter(function (item) { return !!item; });
        this.sourceOutputOtherSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceOutputOther = this.sourceOutputOtherSubject.filter(function (item) { return !!item; });
        this.streamSourceInputSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInput = this.streamSourceInputSubject.filter(function (item) { return !!item; });
        this.streamSourceInputOtherSubject = new BehaviorSubject_1.BehaviorSubject(null);
        this.streamSourceInputOther = this.streamSourceInputOtherSubject.filter(function (item) { return !!item; });
        this.listIndex = -1;
        this.listIndexOther = -1;
    }
    ZipWithViewComponent_1 = ZipWithViewComponent;
    ZipWithViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = this.circleService.createStreamItems(ZipWithViewComponent_1.numItems, RanboShapeOptionsService_1.RanboShapeOptionsService.createStreamOption);
        this.list.element
            .map(function (el) { return [el]; })
            .map(function (element) { return new SingleStreamItem_1.SingleStreamItem(element); })
            .forEach(function (item) { return _this.itemsToMoveAlong.push(item); });
        rxjs_1.Observable.interval(1000).subscribe(function () { return _this.startStreamOne(); });
        rxjs_1.Observable.interval(1750).subscribe(function () { return _this.startStreamTwo(); });
    };
    ZipWithViewComponent.prototype.sourceComplete = function (item) {
        this.sourceOutputSubject.next(item);
    };
    ZipWithViewComponent.prototype.sourceCompleteOther = function (item) {
        this.sourceOutputOtherSubject.next(item);
    };
    ZipWithViewComponent.prototype.mapOneComplete = function (steamItem) {
    };
    ZipWithViewComponent.prototype.startStreamOne = function () {
        var itemIndex = this.listIndex = ++this.listIndex % ZipWithViewComponent_1.numItems;
        this.streamSourceInputSubject.next(this.itemsToMoveAlong[itemIndex]);
    };
    ZipWithViewComponent.prototype.startStreamTwo = function () {
        var itemIndex = this.listIndexOther = ++this.listIndexOther % ZipWithViewComponent_1.numItems;
        this.streamSourceInputOtherSubject.next(this.itemsToMoveAlong[itemIndex]);
    };
    ZipWithViewComponent.numItems = 6;
    ZipWithViewComponent = ZipWithViewComponent_1 = __decorate([
        core_1.Component({
            selector: 'zip-with-view',
            template: require('./zip.with.view.component.htm')
        }),
        __metadata("design:paramtypes", [TriangleStreamItemService_1.TriangleStreamItemService,
            SquareStreamItemService_1.SquareStreamItemService,
            CircleStreamItemService_1.CircleStreamItemService])
    ], ZipWithViewComponent);
    return ZipWithViewComponent;
    var ZipWithViewComponent_1;
}());
exports.ZipWithViewComponent = ZipWithViewComponent;
//# sourceMappingURL=zip.with.view.component.js.map