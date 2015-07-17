declare module Wfx {
    interface Behavior {
        apply(element: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    interface ElementAndComponentOld {
        component: Component;
        element: HTMLElement;
    }
    class Component {
        private attributes;
        constructor(attributes: any);
        element: HTMLElement;
        addBinding(binding: Binding): void;
        getAttribute(name: string): any;
        removeChildren(): void;
        forEachChild(action: (c: Component) => void): void;
        private bindings;
        private children;
        private parent;
        setParent(p: Component): void;
        isTemplatedParent: boolean;
        getTemplatedParent(): Component;
        application: Application;
        bindingData(): any;
        refreshApplicationBindings(): void;
        getApplication(): Application;
        refreshBindings(): void;
        data: any;
    }
}
declare module Wfx {
    function bind(getSource: (source: any) => any, options?: BindingOptions): Binding;
    interface BindingOptions {
        setValue?: (source: any, value: any) => void;
        getSource?: (component: any) => any;
    }
    class Binding {
        valueGetter: (source: any) => any;
        options: BindingOptions;
        constructor(valueGetter: (source: any) => any, options: BindingOptions);
        owner: any;
        getSource: () => any;
        getValue(): any;
        targetSetter: (value: any) => void;
        refresh(): void;
    }
}
declare module Wfx {
    class PropertyBehavior implements Behavior {
        apply(element: HTMLElement, component: Component, name: string, value: any): void;
        applyValue(element: HTMLElement, component: any, name: string, value: any): void;
    }
}
declare module Wfx {
    class ForeachBehavior extends PropertyBehavior {
        applyValue(element: HTMLElement, component: Component, name: string, value: any): void;
    }
    class DoNotherBehavior extends PropertyBehavior {
        applyValue(element: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class AttributeBehavior extends PropertyBehavior {
        applyValue(element: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class ClassBehavior extends PropertyBehavior {
        applyValue(target: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class EventBehavior implements Behavior {
        apply(target: HTMLElement, component: Component, name: string, value: (data: any, component: Component) => void): void;
    }
}
declare module Wfx {
    class TextBehavior extends PropertyBehavior {
        applyValue(target: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class StyleBehavior extends PropertyBehavior {
        applyValue(target: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class VisibleBehavior extends PropertyBehavior {
        applyValue(target: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class ValueAttributeBehavior implements Behavior {
        apply(element: HTMLInputElement, component: Component, name: string, value: any): void;
        applyValue(element: HTMLInputElement, component: any, name: string, value: any): void;
    }
}
declare module Wfx {
    class IfBehavior extends PropertyBehavior {
        private inverted;
        constructor(inverted: boolean);
        oldValue: boolean;
        applyValue(element: HTMLElement, component: Component, name: string, value: any): void;
    }
}
declare module Wfx {
    class Application {
        root: Component;
        run(data: any, template: Template, element?: HTMLElement): void;
    }
}
declare module Wfx {
    var behaviors: any;
}
declare module Wfx {
    var customElements: {
        [name: string]: ComponentTemplate;
    };
    var customElementTypes: {
        [name: string]: (attributes: any) => Component;
    };
    type ComponentChild = Component | string;
    function element(tagName: string, attributes: any, ...children: Array<ComponentChild>): Component;
}
declare module Wfx {
    interface Template {
        (data: any): Component;
    }
    interface ComponentTemplate {
        (attributes: any): Component;
    }
}
