/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function helloTemplate(data) {
        return Wfx.element('div', { 'text': "hello world", data: data });
    }
    Sample.helloTemplate = helloTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="helloWorld.tshtml.ts" /> 
/// <reference path="index.ts"/>
new Wfx.Application().run(null, Sample.helloTemplate);
