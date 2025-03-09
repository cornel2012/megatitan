#!/bin/bash

# Instalare grunt-cli global
npm install -g grunt-cli

# Instalare dependențe
npm install

# Creare director lib
mkdir -p lib

# Creare fișier jQuery.d.ts
cat > lib/jQuery.d.ts << 'EOL'
// Type definitions for jQuery 2.1.3
// Project: http://jquery.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>

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
    (func: Function): JQuery;
    (array: any[]): JQuery;
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
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    toggleClass(className: string): JQuery;
    hasClass(className: string): boolean;
    css(propertyName: string): string;
    css(propertyName: string, value: string|number): JQuery;
    css(properties: { [key: string]: string|number }): JQuery;
    attr(attributeName: string): string;
    attr(attributeName: string, value: string|number): JQuery;
    attr(attributes: { [key: string]: string|number }): JQuery;
    html(): string;
    html(htmlString: string): JQuery;
    text(): string;
    text(textString: string): JQuery;
    val(): any;
    val(value: string|number|string[]): JQuery;
    height(): number;
    height(value: number|string): JQuery;
    width(): number;
    width(value: number|string): JQuery;
    offset(): { top: number; left: number; };
    position(): { top: number; left: number; };
    scrollTop(): number;
    scrollTop(value: number): JQuery;
    scrollLeft(): number;
    scrollLeft(value: number): JQuery;
    on(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    off(events: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    trigger(eventType: string, extraParameters?: any[]): JQuery;
    find(selector: string): JQuery;
    closest(selector: string): JQuery;
    parent(selector?: string): JQuery;
    children(selector?: string): JQuery;
    siblings(selector?: string): JQuery;
    prev(selector?: string): JQuery;
    next(selector?: string): JQuery;
    first(): JQuery;
    last(): JQuery;
    each(func: (index: number, elem: Element) => any): JQuery;
    map(func: (index: number, elem: Element) => any): JQuery;
    filter(selector: string): JQuery;
    not(selector: string): JQuery;
    is(selector: string): boolean;
    append(content: string|Element|JQuery): JQuery;
    prepend(content: string|Element|JQuery): JQuery;
    before(content: string|Element|JQuery): JQuery;
    after(content: string|Element|JQuery): JQuery;
    remove(selector?: string): JQuery;
    empty(): JQuery;
    clone(withDataAndEvents?: boolean): JQuery;
    data(key: string): any;
    data(key: string, value: any): JQuery;
    removeData(key: string): JQuery;
    show(): JQuery;
    hide(): JQuery;
    toggle(showOrHide?: boolean): JQuery;
    fadeIn(duration?: number|string, complete?: Function): JQuery;
    fadeOut(duration?: number|string, complete?: Function): JQuery;
    fadeTo(duration: number|string, opacity: number, complete?: Function): JQuery;
    animate(properties: { [key: string]: string|number }, duration?: number|string, complete?: Function): JQuery;
    keyup(handler: (eventObject: JQueryEvent) => any): JQuery;
    resize(handler: (eventObject: JQueryEvent) => any): JQuery;
    innerHeight(): number;
    innerWidth(): number;
}

interface JQueryEventObject {
    type: string;
    target: Element;
    currentTarget: Element;
    delegateTarget: Element;
    relatedTarget: Element;
    data: any;
    namespace: string;
    result: any;
    which: number;
    metaKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
    altKey: boolean;
    keyCode: number;
    pageX: number;
    pageY: number;
    preventDefault(): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    isDefaultPrevented(): boolean;
    isPropagationStopped(): boolean;
    isImmediatePropagationStopped(): boolean;
}

declare var $: JQueryStatic;
EOL

# Rulare grunt
grunt 