export function initPageStepone(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-header></custom-header>
    <div class= "container">
        <custom-text variant="title">Necesitamos algunos datos más</custom-text>
        <text-field label="Email"></text-field>
        <text-field label="Comida favorita"></text-field>
        <select>
            <option disabled default selected>Seleccioná alguna de estas tres opciones</option>
            <option>Piedra</option>
            <option>Papel</option>
            <option>Tijera</option>
        </select>
        <custom-button class="custom-button" text="Continuar"></custom-button>
        <button class="back">Volver</button>
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
        .back{
            width: 100%;
            font-size: 18px;
            margin: 18px 0;
            display: block;
            border: 2px solid #000000;
            border-radius: 4px;
        }
        select{
            width: 100%;
            font-size: 14px;
            margin: 18px 0;
            padding: 0px;
            box-sizing: border-box;
        }
    `;

    div.append(style);

    const goButtonEl = div.querySelector(".custom-button") as any;    

    goButtonEl.addEventListener("click", function() {
        params.goTo("/thankyou")
    });

    const backEl = div.querySelector(".back") as any;
    backEl.addEventListener("click", function() {
        params.goTo("/welcome")
    })

    return div
}