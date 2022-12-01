import {initRouter} from "./router";
import {initHeaderComponent} from "./components/header";
import {initTextComponent} from "./components/text";
import {initTextFieldComponent} from "./components/text-field/";
import {initButtonComponent} from "./components/button/";
import {initFooterComponent} from "./components/footer";


function main(){
    const root = document.querySelector(".root");
    
    initTextComponent()
    initHeaderComponent();
    initTextFieldComponent();
    initButtonComponent();
    initFooterComponent();


    initRouter(root);
}
main()