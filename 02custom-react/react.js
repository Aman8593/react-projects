
function customRender(element,Container) {
    /*
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)
    Container.appendChild(domElement);
    */
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        // if (prop === children) continue;
        if (prop === 'href' || prop === 'target') {
            domElement.setAttribute(prop, element.props[prop]);
        }
    }
    Container.appendChild(domElement);
}

const element = {
    type : 'a',
    props : {
        href : 'https://www.example.com',
        target : '_blank'
    },
    children : 'click here to visit'
}

const mainContainer = document.querySelector('#root')

customRender(element,mainContainer);