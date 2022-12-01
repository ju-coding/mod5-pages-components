export function initFooterComponent() {

    class Footer extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            const shadow = this.attachShadow({mode: "open"});
            var div = document.createElement('div');
            div.className = "contenedor"

            var img = document.createElement('img');
            img.src = "";
            img.className = "logo"

            var nav = document.createElement('nav');
            nav.innerHTML = `
                <a href="">Instagram</a>
                <a href="">Linkedin</a>
                <a href="">Github</a>
            `
            nav.className = "nav"

            var style = document.createElement('style');
            style.textContent = `
                .contenedor{
                    background-color: #D3D3D3;
                    height: 60px;
                    justify-content: space-between;
                }
                .logo{
                    margin: 10px;
                }
                .nav{
                    margin-left: 30px;
                    align-items: center;
                    justify-content: center;
                }
                a{
                    margin: 10px;
                    display: inline-block;
                }
            `
            shadow.appendChild(style);
            shadow.appendChild(div);
            div.appendChild(img);
            div.appendChild(nav);
        }
    }
    customElements.define('custom-footer', Footer);
}