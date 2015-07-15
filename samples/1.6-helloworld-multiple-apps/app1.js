/// <reference path='index.ts'/>
var App1;
(function (App1) {
    function helloTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { 'text': Wfx.bind(function (_) { return _.message; }), data: data }), Wfx.element('span', { data: data }, "Enter message your message:"), Wfx.element('input', { 'value': Wfx.bind(function (_) { return _.message; }, { setValue: function (_, v) { return _.message = v; } }), data: data }));
    }
    App1.helloTemplate = helloTemplate;
})(App1 || (App1 = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="helloWorld.tshtml.ts" /> 
/// <reference path="index.ts"/>
var HelloWorldViewModel = (function () {
    function HelloWorldViewModel() {
        this.message = "hello from application 1";
    }
    return HelloWorldViewModel;
})();
new Wfx.Application().run(new HelloWorldViewModel(), App1.helloTemplate, document.getElementById("app1"));
//# sourceMappingURL=app1.js.map