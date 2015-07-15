module Web {
	export class MiniPromise<T>
	{
		constructor(action: (resolve, reject) => void) {
			action((r) => this._then(r), (e) => console.log("Error"));

		}
		_then: (t: T) => void;
		then(action: (t: T) => void) {
			this._then = action;
		}
	}
    export class WebClient {
        execute(url: string, verb: string = "GET"): MiniPromise<string> {
            return new MiniPromise<string>((resolve, reject) => {
                var request = new XMLHttpRequest();
                request.open(verb, url, true);
                request.onreadystatechange = ev => {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            resolve(request.response);
                        } else {
                            reject("Error: " + request.status);
                        }
                    }
                }
                request.send();
            });
        }
        get(url): MiniPromise<string> {
            return this.execute(url);
        }
    }
}
setTimeout(() => {
	var items = document.querySelectorAll(".code");
	for (var i = 0; i < items.length; i++) {
        var f = () =>{
		  var item = <HTMLTextAreaElement>items.item(i);
		  var url = item.attributes.getNamedItem("data-url").value;
		var webclient = new Web.WebClient();
		webclient.get(url).then(s => {
            debugger;
            item.innerText = s;}
            ); 
        };
        f();
	}
}
	, 0.1);