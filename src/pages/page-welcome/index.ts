export function initPageWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-header></custom-header>
    <div class= "container">
        <custom-text variant="title">Te damos la bienvenida a esta web</custom-text>
        <custom-text variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
        <text-field label="Nombre"></text-field>
        <custom-button class="custom-button" text="Comenzar"></custom-button>
    </div>
    <custom-footer></custom-footer>
    `;
    
    var style = document.createElement('style');
    style.textContent = `
        .container{
            padding: 30px;
            max-width: 300px;
            min-height: 600px;
        }
    `;

    div.append(style);

    const goButtonEl = div.querySelector(".custom-button") as any;
    
    goButtonEl.addEventListener("click", function() {
        params.goTo("/step-one")
    })

    return div
}