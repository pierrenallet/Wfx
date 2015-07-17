var Wfx;
(function (Wfx) {
    var Component = (function () {
        function Component(attributes) {
            this.attributes = attributes;
            this.bindings = new Array();
            this.children = new Array();
            this.isTemplatedParent = false;
        }
        Component.prototype.addBinding = function (binding) {
            this.bindings.push(binding);
        };
        Component.prototype.getAttribute = function (name) {
            return this.attributes[name];
        };
        Component.prototype.removeChildren = function () {
            this.children = [];
        };
        Component.prototype.forEachChild = function (action) {
            this.children.forEach(action);
        };
        Component.prototype.setParent = function (p) {
            this.parent = p;
            p.children.push(this);
        };
        Component.prototype.getTemplatedParent = function () {
            if (this.isTemplatedParent)
                return this;
            return this.parent.getTemplatedParent();
        };
        Component.prototype.bindingData = function () {
            var result = {};
            for (var name in this.attributes) {
                var v = this.attributes[name];
                result[name] = v;
            }
            result.data = this.data;
            return result;
        };
        Component.prototype.refreshApplicationBindings = function () {
            this.getApplication().root.refreshBindings();
        };
        Component.prototype.getApplication = function () {
            if (this.application != null)
                return this.application;
            return this.parent.getApplication();
        };
        Component.prototype.refreshBindings = function () {
            this.bindings.forEach(function (b) { return b.refresh(); });
            this.children.forEach(function (c) { return c.refreshBindings(); });
        };
        Object.defineProperty(Component.prototype, "data", {
            get: function () {
                var data = this.getAttribute('data');
                if (data !== undefined)
                    return data;
                if (this.parent == null)
                    return null;
                return this.parent.data;
            },
            enumerable: true,
            configurable: true
        });
        return Component;
    })();
    Wfx.Component = Component;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    function bind(getSource, options) {
        return new Binding(getSource, options);
    }
    Wfx.bind = bind;
    var Binding = (function () {
        function Binding(valueGetter, options) {
            this.valueGetter = valueGetter;
            this.options = options;
        }
        Binding.prototype.getValue = function () {
            var v = this.valueGetter(this.getSource());
            if (v instanceof Binding) {
                v = v.getValue();
            }
            return v;
        };
        Binding.prototype.refresh = function () {
            this.targetSetter(this.getValue());
        };
        return Binding;
    })();
    Wfx.Binding = Binding;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var PropertyBehavior = (function () {
        function PropertyBehavior() {
        }
        PropertyBehavior.prototype.apply = function (element, component, name, value) {
            var _this = this;
            if (value instanceof Wfx.Binding) {
                var binding = value;
                if (binding.options && binding.options.getSource) {
                    var g = binding.options.getSource;
                    binding.getSource = function () { return g(component); };
                }
                else {
                    binding.getSource = function () { return component.data; };
                }
                binding.targetSetter = function (v) {
                    _this.applyValue(element, component, name, binding.getValue());
                };
                component.addBinding(binding);
                setTimeout(function () { return binding.targetSetter(binding.getValue()); });
                return;
            }
            this.applyValue(element, component, name, value);
        };
        PropertyBehavior.prototype.applyValue = function (element, component, name, value) {
            throw new Error("abstract");
        };
        return PropertyBehavior;
    })();
    Wfx.PropertyBehavior = PropertyBehavior;
})(Wfx || (Wfx = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wfx;
(function (Wfx) {
    var ForeachBehavior = (function (_super) {
        __extends(ForeachBehavior, _super);
        function ForeachBehavior() {
            _super.apply(this, arguments);
        }
        ForeachBehavior.prototype.applyValue = function (element, component, name, value) {
            var template = component.getAttribute('template');
            if (template == null) {
                throw new Error("not implemented");
            }
            for (var i = element.childNodes.length - 1; i >= 0; i--) {
                element.removeChild(element.childNodes.item(i));
            }
            component.removeChildren();
            var items = value;
            items.forEach(function (item) {
                var t = template(item);
                t.setParent(component);
                element.appendChild(t.element);
            });
        };
        return ForeachBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.ForeachBehavior = ForeachBehavior;
    var DoNotherBehavior = (function (_super) {
        __extends(DoNotherBehavior, _super);
        function DoNotherBehavior() {
            _super.apply(this, arguments);
        }
        DoNotherBehavior.prototype.applyValue = function (element, component, name, value) {
        };
        return DoNotherBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.DoNotherBehavior = DoNotherBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var AttributeBehavior = (function (_super) {
        __extends(AttributeBehavior, _super);
        function AttributeBehavior() {
            _super.apply(this, arguments);
        }
        AttributeBehavior.prototype.applyValue = function (element, component, name, value) {
            if (value === undefined)
                return;
            if (name == "checked") {
                element.checked = value;
            }
            else
                element.setAttribute(name, value);
        };
        return AttributeBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.AttributeBehavior = AttributeBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var ClassBehavior = (function (_super) {
        __extends(ClassBehavior, _super);
        function ClassBehavior() {
            _super.apply(this, arguments);
        }
        ClassBehavior.prototype.applyValue = function (target, component, name, value) {
            while (target.classList.length > 0)
                target.classList.remove(target.classList.item(0));
            if (value) {
                var v = value.split(" ").filter(function (v) { return v.length > 0; });
                v.forEach(function (item) { return target.classList.add(item); });
            }
        };
        return ClassBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.ClassBehavior = ClassBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var EventBehavior = (function () {
        function EventBehavior() {
        }
        EventBehavior.prototype.apply = function (target, component, name, value) {
            target.addEventListener(name, function (event) {
                try {
                    value(component.data, component);
                    setTimeout(function () { return component.refreshApplicationBindings(); });
                }
                catch (error) {
                    console.log("failed when raising event " + name);
                }
                event.preventDefault();
            });
        };
        return EventBehavior;
    })();
    Wfx.EventBehavior = EventBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var TextBehavior = (function (_super) {
        __extends(TextBehavior, _super);
        function TextBehavior() {
            _super.apply(this, arguments);
        }
        TextBehavior.prototype.applyValue = function (target, component, name, value) {
            target.innerText = value;
        };
        return TextBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.TextBehavior = TextBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var StyleBehavior = (function (_super) {
        __extends(StyleBehavior, _super);
        function StyleBehavior() {
            _super.apply(this, arguments);
        }
        StyleBehavior.prototype.applyValue = function (target, component, name, value) {
            target.style[name] = value;
        };
        return StyleBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.StyleBehavior = StyleBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var VisibleBehavior = (function (_super) {
        __extends(VisibleBehavior, _super);
        function VisibleBehavior() {
            _super.apply(this, arguments);
        }
        VisibleBehavior.prototype.applyValue = function (target, component, name, value) {
            if (!value) {
                target.style.display = "none";
            }
            else {
                target.style.removeProperty("display");
            }
        };
        return VisibleBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.VisibleBehavior = VisibleBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var ValueAttributeBehavior = (function () {
        function ValueAttributeBehavior() {
        }
        ValueAttributeBehavior.prototype.apply = function (element, component, name, value) {
            var _this = this;
            if (value instanceof Wfx.Binding) {
                var binding = value;
                binding.getSource = function () { return component.data; };
                binding.targetSetter = function (v) {
                    _this.applyValue(element, component, name, binding.getValue());
                };
                component.addBinding(binding);
                var eventName = "keyup";
                if (component.getAttribute("type") == "range")
                    eventName = "change";
                element.addEventListener(eventName, function () {
                    binding.options.setValue(binding.getSource(), element.value);
                    component.refreshApplicationBindings();
                });
                setTimeout(function () { return binding.targetSetter(binding.getValue()); });
                return;
            }
            this.applyValue(element, component, name, value);
        };
        ValueAttributeBehavior.prototype.applyValue = function (element, component, name, value) {
            if (value !== undefined) {
                element.value = value;
            }
        };
        return ValueAttributeBehavior;
    })();
    Wfx.ValueAttributeBehavior = ValueAttributeBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var IfBehavior = (function (_super) {
        __extends(IfBehavior, _super);
        function IfBehavior(inverted) {
            _super.call(this);
            this.inverted = inverted;
        }
        IfBehavior.prototype.applyValue = function (element, component, name, value) {
            value = !!value;
            if (this.inverted) {
                value = !value;
            }
            if (value === this.oldValue)
                return;
            this.oldValue = value;
            if (value) {
                component.forEachChild(function (child) { return element.appendChild(child.element); });
            }
            else {
                for (var i = element.childNodes.length - 1; i >= 0; i--) {
                    element.removeChild(element.childNodes.item(i));
                }
            }
        };
        return IfBehavior;
    })(Wfx.PropertyBehavior);
    Wfx.IfBehavior = IfBehavior;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    var Application = (function () {
        function Application() {
        }
        Application.prototype.run = function (data, template, element) {
            var _this = this;
            if (element === void 0) { element = null; }
            setTimeout(function () {
                if (!element) {
                    element = document.body;
                }
                var t = template(data);
                _this.root = t;
                t.application = _this;
                element.appendChild(t.element);
            });
        };
        return Application;
    })();
    Wfx.Application = Application;
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    Wfx.behaviors = {
        submit: new Wfx.EventBehavior(),
        click: new Wfx.EventBehavior(),
        dblclick: new Wfx.EventBehavior(),
        focus: new Wfx.EventBehavior(),
        blur: new Wfx.EventBehavior(),
        'class': new Wfx.ClassBehavior(),
        value: new Wfx.ValueAttributeBehavior(),
        id: new Wfx.AttributeBehavior(),
        autofocus: new Wfx.AttributeBehavior(),
        enabled: new Wfx.AttributeBehavior(),
        type: new Wfx.AttributeBehavior(),
        'for': new Wfx.AttributeBehavior(),
        href: new Wfx.AttributeBehavior(),
        placeholder: new Wfx.AttributeBehavior(),
        checked: new Wfx.AttributeBehavior(),
        width: new Wfx.StyleBehavior(),
        height: new Wfx.StyleBehavior(),
        background: new Wfx.StyleBehavior(),
        style: new Wfx.AttributeBehavior(),
        text: new Wfx.TextBehavior(),
        visible: new Wfx.VisibleBehavior(),
        foreach: new Wfx.ForeachBehavior(),
        'if': new Wfx.IfBehavior(false),
        'ifnot': new Wfx.IfBehavior(true),
    };
})(Wfx || (Wfx = {}));
var Wfx;
(function (Wfx) {
    Wfx.customElements = {};
    Wfx.customElementTypes = {};
    function element(tagName, attributes) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        if (Wfx.customElements[tagName]) {
            var child = Wfx.customElements[tagName](attributes);
            var result = new Wfx.Component(attributes);
            var result = Wfx.customElementTypes[tagName](attributes);
            result.isTemplatedParent = true;
            child.setParent(result);
            result.element = child.element;
            return result;
        }
        var element = document.createElement(tagName);
        var component = new Wfx.Component(attributes);
        if (component) {
            for (var name in attributes) {
                var behavior = Wfx.behaviors[name];
                if (behavior == null) {
                    console.log("Could not find " + name);
                }
                else {
                    behavior.apply(element, component, name, component.getAttribute(name));
                }
            }
        }
        if (children) {
            children.forEach(function (child) {
                if (typeof child === "string") {
                    element.appendChild(document.createTextNode(child));
                }
                else {
                    element.appendChild(child.element);
                    child.setParent(component);
                }
            });
        }
        component.element = element;
        return component;
    }
    Wfx.element = element;
})(Wfx || (Wfx = {}));
