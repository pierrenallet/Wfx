var Web;
(function (Web) {
    var MiniPromise = (function () {
        function MiniPromise(action) {
            var _this = this;
            action(function (r) { return _this._then(r); }, function (e) { return console.log("Error"); });
        }
        MiniPromise.prototype.then = function (action) {
            this._then = action;
        };
        return MiniPromise;
    })();
    Web.MiniPromise = MiniPromise;
    var WebClient = (function () {
        function WebClient() {
        }
        WebClient.prototype.execute = function (url, verb) {
            if (verb === void 0) { verb = "GET"; }
            return new MiniPromise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open(verb, url, true);
                request.onreadystatechange = function (ev) {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            resolve(request.response);
                        }
                        else {
                            reject("Error: " + request.status);
                        }
                    }
                };
                request.send();
            });
        };
        WebClient.prototype.get = function (url) {
            return this.execute(url);
        };
        return WebClient;
    })();
    Web.WebClient = WebClient;
})(Web || (Web = {}));
setTimeout(function () {
    var items = document.querySelectorAll(".code");
    for (var i = 0; i < items.length; i++) {
        var f = function () {
            var item = items.item(i);
            var url = item.attributes.getNamedItem("data-url").value;
            var webclient = new Web.WebClient();
            webclient.get(url).then(function (s) {
                debugger;
                item.innerText = s.replace(/\t/g, " ");
            });
        };
        f();
    }
}, 0.1);
