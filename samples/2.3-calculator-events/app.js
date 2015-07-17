/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function calcTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('button', { 'class': "btn", 'click': function (_) { return _.decrease(); }, data: data }, "-"), Wfx.element('span', { 'text': Wfx.bind(function (_) { return _.value; }), data: data }), Wfx.element('button', { 'class': "btn", 'click': function (_) { return _.increase(); }, data: data }, "+"));
    }
    Sample.calcTemplate = calcTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="calculator.tshtml.ts" /> 
/// <reference path="index.ts"/>
var Calculator = (function () {
    function Calculator() {
        this.value = 0;
    }
    Calculator.prototype.increase = function () {
        this.value += 1;
    };
    Calculator.prototype.decrease = function () {
        this.value -= 1;
    };
    Calculator.prototype.increaseBy = function (amount) {
        this.value += amount;
    };
    return Calculator;
})();
new Wfx.Application().run(new Calculator(), Sample.calcTemplate);
