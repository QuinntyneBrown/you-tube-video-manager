export class Renderer {
    setElementProperty = (element: HTMLElement, property: string, value: string) => {
        element.attributes[property] = value;
    }
}


angular.module("renderer",[]).service("renderer", [Renderer]);