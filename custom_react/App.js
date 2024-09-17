function customRender(reactElement, container){
    const element = document.createElement(reactElement.type)
    element.innerHTML = react_element.children
    for (const prop in react_element.props) {
        element.setAttribute(prop,react_element.props[prop])
    }
    container.appendChild(element)
}

const react_element = {
    type:'a',
    props : {
        href:"www.google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector("#root")

customRender(react_element,mainContainer) 