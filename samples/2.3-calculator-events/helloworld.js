/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function calcTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { data: data }, Wfx.element('input', { 'text': "text",
            'value': Wfx.bind(function (_) { return _.firstNumber; }, { setValue: function (_, v) { return _.firstNumber = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('input', { 'text': "text",
            'value': Wfx.bind(function (_) { return _.secondNumber; }, { setValue: function (_, v) { return _.secondNumber = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('span', { 'text': Wfx.bind(function (_) { return _.result(); }), data: data })));
    }
    Sample.calcTemplate = calcTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="calculator.tshtml.ts" /> 
/// <reference path="index.ts"/>
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.result = function () {
        return parseInt(this.firstNumber, 10) + parseInt(this.secondNumber, 10);
    };
    return Calculator;
})();
Wfx.bootstrap(new Calculator(), Sample.calcTemplate);
//# sourceMappingURL=helloworld.js.map