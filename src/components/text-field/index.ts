export function initTextFieldComponent() {

    class TextField extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const label = this.getAttribute("label");
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
                .label{
                    display: block;
                    margin-top: 30px;
                    margin-bottom: 8px;
                }
                .input{
                    width: 100%;
                    font-size: 18px;
                    margin-bottom: 18px;
                    padding: 0px;
                    box-sizing: border-box;
                }
            `;
            div.innerHTML = `
                <label class="label">${label}</label>
                <input type="text" class="input">
            `
            shadow.appendChild(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("text-field", TextField)
}