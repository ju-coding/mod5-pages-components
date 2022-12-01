export function initPageThankyou(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-header></custom-header>
    <div class= "container">
        <custom-text variant="title">Gracias!</custom-text>
        <custom-text variant="body">Toda la información que nos brindaste es muy importante</custom-text>
        <custom-button class="custom-button" text="Un placer"></custom-button>
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
        params.goTo("/welcome")
    })

    return div
}