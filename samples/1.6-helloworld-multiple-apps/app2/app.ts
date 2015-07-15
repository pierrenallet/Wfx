/// <reference path="index.ts"/>

class HelloWorldViewModel{
	message = "hello from application 2";
}
new Wfx.Application().run(new HelloWorldViewModel(), App2.helloTemplate, document.getElementById("app2"))