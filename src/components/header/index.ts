export function initHeaderComponent() {

    class Header extends HTMLElement {
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
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            `
            nav.className = "nav"

            var style = document.createElement('style');
            style.textContent = `
                .contenedor{
                    background-color: #D3D3D3;
                    height: 60px;
                    display: flex;
                    justify-content: space-between;
                }
                .logo{
                    margin: 10px;
                }
                .nav{
                    margin-right: 30px;
                    align-items: center;
                    justify-content: center;
                    display: flex;
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
    customElements.define('custom-header', Header);
}