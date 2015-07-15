/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function helloTemplate(data) {
        return Wfx.element('div', { 'text': Wfx.bind(function (_) { return _.message; }), data: data });
    }
    Sample.helloTemplate = helloTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="helloWorld.tshtml.ts" /> 
/// <reference path="index.ts"/>
var data = { message: "Hello world" };
new Wfx.Application().run(data, Sample.helloTemplate);
//# sourceMappingURL=helloworld.js.map