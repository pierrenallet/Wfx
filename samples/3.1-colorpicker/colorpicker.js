/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function colorPickerTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { data: data }, Wfx.element('span', { data: data }, "Red:"), Wfx.element('input', { 'type': "range",
            'value': Wfx.bind(function (_) { return _.red; }, { setValue: function (_, v) { return _.red = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('span', { data: data }, "Green:"), Wfx.element('input', { 'type': "range",
            'value': Wfx.bind(function (_) { return _.green; }, { setValue: function (_, v) { return _.green = v; } }), data: data })), Wfx.element('div', { data: data }, Wfx.element('span', { data: data }, "Blue:"), Wfx.element('input', { 'type': "range",
            'value': Wfx.bind(function (_) { return _.blue; }, { setValue: function (_, v) { return _.blue = v; } }), data: data })), Wfx.element('div', { 'style': "height:100px; width:100px",
            'background': Wfx.bind(function (_) { return _.color(); }), data: data }));
    }
    Sample.colorPickerTemplate = colorPickerTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="colorpicker.tshtml.ts" /> 
/// <reference path="index.ts"/>
var ColorPicker = (function () {
    function ColorPicker() {
        this.red = "00";
        this.green = "00";
        this.blue = "00";
    }
    ColorPicker.prototype.color = function () {
        return "#" + this.colorComponent(this.red) + this.colorComponent(this.green) + this.colorComponent(this.blue);
    };
    ColorPicker.prototype.colorComponent = function (s) {
        if (s.length == 0)
            return "00";
        if (s.length == 1)
            return "0" + s;
        return s;
    };
    return ColorPicker;
})();
new Wfx.Application().run(new ColorPicker(), Sample.colorPickerTemplate);
//# sourceMappingURL=colorpicker.js.map