/// <reference path="index.ts"/>

class HelloWorldViewModel{
	message = "hello from application 1";
}
new Wfx.Application().run(new HelloWorldViewModel(), App1.helloTemplate, document.getElementById("app1"))