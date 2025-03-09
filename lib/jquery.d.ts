// Type definitions for jQuery 1.10.x / 2.0.x
// Project: http://jquery.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JQueryEventConstructor {
    new(type: string, props?: any): JQueryEvent;
}

interface JQueryEvent {
    type: string;
    target: HTMLElement;
    keyCode: number;
    which: number;
    preventDefault(): void;
    stopPropagation(): void;
}

interface JQueryStatic {
    Callbacks(flags?: string): JQueryCallback;
    event: JQueryEventConstructor;
    (selector: string): JQuery;
    (element: Element): JQuery;
    (object: {}): JQuery;
    (elementArray: Element[]): JQuery;
    (object: JQuery): JQuery;
    (callback: Function): JQuery;
    (): JQuery;
}

interface JQueryCallback {
    add(...callbacks: Function[]): JQueryCallback;
    fire(...arguments: any[]): JQueryCallback;
    remove(...callbacks: Function[]): JQueryCallback;
    empty(): JQueryCallback;
    has(callback: Function): boolean;
    lock(): JQueryCallback;
    locked(): boolean;
    fireWith(context: any, args?: any[]): JQueryCallback;
}

interface JQuery {
    offset(): { top: number; left: number; };
    get(index: number): HTMLElement;
    mouseenter(handler: (eventObject: JQueryEvent) => any): JQuery;
    mouseleave(handler: (eventObject: JQueryEvent) => any): JQuery;
    click(handler: (eventObject: JQueryEvent) => any): JQuery;
    keyup(handler: (eventObject: JQueryEvent) => any): JQuery;
    resize(handler: (eventObject: JQueryEvent) => any): JQuery;
    parent(): JQuery;
    height(): number;
    height(value: number | string): JQuery;
    width(): number;
    width(value: number | string): JQuery;
    innerWidth(): number;
    innerHeight(): number;
    (selector: string): JQuery;
    (element: Element): JQuery;
    (object: {}): JQuery;
    (elementArray: Element[]): JQuery;
    (object: JQuery): JQuery;
    (callback: Function): JQuery;
    (): JQuery;
}

declare var $: JQueryStatic;
