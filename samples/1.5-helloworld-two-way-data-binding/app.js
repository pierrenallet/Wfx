/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function helloTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { 'text': Wfx.bind(function (_) { return _.message; }), data: data }), Wfx.element('span', { data: data }, "Enter message your message:"), Wfx.element('input', { 'value': Wfx.bind(function (_) { return _.message; }, { setValue: function (_, v) { return _.message = v; } }), data: data }));
    }
    Sample.helloTemplate = helloTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="helloWorld.tshtml.ts" /> 
/// <reference path="index.ts"/>
var HelloWorldViewModel = (function () {
    function HelloWorldViewModel() {
        this.message = "Hello world from class";
    }
    return HelloWorldViewModel;
})();
new Wfx.Application().run(new HelloWorldViewModel(), Sample.helloTemplate);
