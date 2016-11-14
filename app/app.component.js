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
var core_1 = require("@angular/core");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent() {
        this.td5 = document.body.clientWidth >= 1010;
        this.td7 = document.body.clientWidth >= 827;
        this.td6 = document.body.clientWidth >= 759;
        this.td8 = document.body.clientWidth >= 570;
        this.colors = ['#ffaaaa', '#cccccc'];
        this.lastColors = ['#000000', '#bf0000'];
        this.colorMaps = [];
        this.values = [];
        this.simbol1 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        this.simbol2 = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("values: " + this.values.length);
        for (var i = 0; i < 12; i++) {
            this.setSparklinesData();
        }
        $(window).resize(this.debounce(function () {
            _this.childChildren.forEach(function (child, i) {
                if (i > 10) {
                    return;
                }
                $(child.nativeElement).sparkline(_this.values[i], {
                    type: 'bar', barSpacing: 0, colorMap: _this.colorMaps[i]
                });
            });
            _this.td5 = document.body.clientWidth >= 1010;
            _this.td7 = document.body.clientWidth >= 827;
            _this.td6 = document.body.clientWidth >= 759;
            _this.td8 = document.body.clientWidth >= 570;
        }, 50));
        this.data = data_1.DATA;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.childChildren.forEach(function (child, i) {
            if (i > 10) {
                return;
            }
            $(child.nativeElement).sparkline(_this.values[i], {
                type: 'bar', barSpacing: 0, colorMap: _this.colorMaps[i]
            });
        });
    };
    AppComponent.prototype.setSparklinesData = function () {
        var numbers = [];
        for (var x = 0; x < 12; x++) {
            numbers[x] = Math.round(Math.random() * 12);
        }
        this.values.push(numbers);
        var colorMap = [];
        for (var z = 0; z < 12; z++) {
            if (z < 11)
                colorMap[z] = this.colors[Math.round(Math.random()) === 0 ? Math.round(Math.random()) : 1];
            else
                colorMap[z] = this.lastColors[Math.round(Math.random())];
        }
        this.colorMaps.push(colorMap);
    };
    AppComponent.prototype.debounce = function (f, ms) {
        var state = null;
        var COOLDOWN = 1;
        return function () {
            if (state)
                return;
            f.apply(this, arguments);
            state = COOLDOWN;
            setTimeout(function () { state = null; }, ms);
        };
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChildren('spark'),
    __metadata("design:type", Object)
], AppComponent.prototype, "childChildren", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map