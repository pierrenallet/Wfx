/// <reference path='index.ts'/>
var Sample;
(function (Sample) {
    function timeTemplate(data) {
        return Wfx.element('div', { data: data }, "The current time is", Wfx.element('div', { 'text': (new Date()), data: data }));
    }
    Sample.timeTemplate = timeTemplate;
})(Sample || (Sample = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="calculator.tshtml.ts" /> 
/// <reference path="index.ts"/>
new Wfx.Application().run(null, Sample.timeTemplate);
//# sourceMappingURL=calculator.js.map