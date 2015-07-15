/// <reference path="index.ts"/>

class HelloWorldViewModel{
	message = "Hello world from class";
}
new Wfx.Application().run(new HelloWorldViewModel(), Sample.helloTemplate)