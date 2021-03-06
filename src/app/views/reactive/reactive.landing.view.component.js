"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageUtility_1 = require("../../utilities/ImageUtility");
var ReactiveLandingViewComponent = /** @class */ (function () {
    function ReactiveLandingViewComponent() {
        this.oneOhOne = ImageUtility_1.ImageUtility.easyStreet;
        this.concept = ImageUtility_1.ImageUtility.circleToMany;
    }
    ReactiveLandingViewComponent = __decorate([
        core_1.Component({
            selector: 'reactive-landing-view',
            template: require('./reactive.landing.view.component.htm')
        })
    ], ReactiveLandingViewComponent);
    return ReactiveLandingViewComponent;
}());
exports.ReactiveLandingViewComponent = ReactiveLandingViewComponent;
//# sourceMappingURL=reactive.landing.view.component.js.map