import "./createContainerStyles.css";

export default function createContainer() {
    const portalId = "notifyContainer";
    let element = document.getElementById(portalId);

    if (element) {
        return element;
    }

    element = document.createElement("div");
    element.setAttribute("id", portalId);
    element.className = 'container';
    document.body.appendChild(element);
    return element;
}