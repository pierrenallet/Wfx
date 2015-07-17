/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function itemTemplate(data) {
        return Wfx.element('div', { 'text': Wfx.bind(function (_) { return _; }), data: data });
    }
    Sample.itemTemplate = itemTemplate;
})(Sample || (Sample = {}));
/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function shoppingCartTemplate(data) {
        return Wfx.element('div', { 'foreach': Wfx.bind(function (_) { return _.items; }), 'template': (Sample.itemTemplate), data: data });
    }
    Sample.shoppingCartTemplate = shoppingCartTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="item.tshtml.ts" />
/// <reference path="shoppingCart.tshtml.ts" /> 
/// <reference path="index.ts"/>
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = ["Apple", "Bannana", "Cocoa"];
    }
    return ShoppingCart;
})();
new Wfx.Application().run(new ShoppingCart(), Sample.shoppingCartTemplate);
