/// <reference path="index.ts"/>

function messageFn() {
	return "Hello world from function";
}
new Wfx.Application().run(null, Sample.helloTemplate)