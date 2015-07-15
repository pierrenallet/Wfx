/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function calcTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { data: data }, Wfx.element('span', { data: data }, "Width:"), Wfx.element('input', { 'type': "text",
            'value': Wfx.bind(function (_) { return _.width; }, { setValue: function (_, v) { return _.width = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('span', { data: data }, "Height:"), Wfx.element('input', { 'type': "text",
            'value': Wfx.bind(function (_) { return _.height; }, { setValue: function (_, v) { return _.height = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('div', { 'style': "background:red",
            'text': Wfx.bind(function (_) { return _.surface(); }),
            'height': Wfx.bind(function (_) { return _.height + 'px'; }),
            'width': Wfx.bind(function (_) { return _.width + 'px'; }), data: data })));
    }
    Sample.calcTemplate = calcTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="calculator.tshtml.ts" /> 
/// <reference path="index.ts"/>
var Calculator = (function () {
    function Calculator() {
        this.height = "100";
        this.width = "100";
    }
    Calculator.prototype.surface = function () {
        return parseInt(this.height, 10) * parseInt(this.width, 10);
    };
    return Calculator;
})();
new Wfx.Application().run(new Calculator(), Sample.calcTemplate);
//# sourceMappingURL=calculator.js.map