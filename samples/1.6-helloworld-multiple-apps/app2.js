/// <reference path='index.ts'/>
var App2;
(function (App2) {
    function helloTemplate(data) {
        return Wfx.element('div', { data: data }, Wfx.element('div', { 'text': Wfx.bind(function (_) { return _.message; }), data: data }), Wfx.element('span', { data: data }, "Enter message your message:"), Wfx.element('input', { 'value': Wfx.bind(function (_) { return _.message; }, { setValue: function (_, v) { return _.message = v; } }), data: data }));
    }
    App2.helloTemplate = helloTemplate;
})(App2 || (App2 = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="helloWorld.tshtml.ts" /> 
/// <reference path="index.ts"/>
var HelloWorldViewModel = (function () {
    function HelloWorldViewModel() {
        this.message = "hello from application 2";
    }
    return HelloWorldViewModel;
})();
new Wfx.Application().run(new HelloWorldViewModel(), App2.helloTemplate, document.getElementById("app2"));
//# sourceMappingURL=app2.js.map