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
        return Wfx.element('div', { data: data }, Wfx.element('div', { 'foreach': Wfx.bind(function (_) { return _.items; }), 'template': (Sample.itemTemplate), data: data }), Wfx.element('div', { data: data }, Wfx.element('input', { 'value': Wfx.bind(function (_) { return _.newItem; }, { setValue: function (_, v) { return _.newItem = v; } }), data: data }), Wfx.element('button', { 'click': function (_) { return _.addItem(); }, data: data }, "Add item")), Wfx.element('div', { data: data }, Wfx.element('button', { 'click': function (_) { return _.removeLast(); }, data: data }, "Remove last")));
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
        this.newItem = "";
    }
    ShoppingCart.prototype.addItem = function () {
        this.items.push(this.newItem);
        this.newItem = "";
    };
    ShoppingCart.prototype.removeLast = function () {
        this.items = this.items.splice(this.items.length - 1);
    };
    return ShoppingCart;
})();
new Wfx.Application().run(new ShoppingCart(), Sample.shoppingCartTemplate);
