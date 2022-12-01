import {initPageWelcome} from "./pages/page-welcome";
import {initPageStepone} from "./pages/page-stepone";
import {initPageThankyou} from "./pages/page-thankyou";

const routes = [
    {
        path: /\/welcome/,
        component: initPageWelcome
    },
    {
        path: /\/step-one/,
        component: initPageStepone
    },
    {
        path: /\/thankyou/,
        component: initPageThankyou
    }
]

export function initRouter(container) {

    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path)
    }

    function handleRoute(route) {
        for (const r of routes) {
            if (r.path.test(route)) {
                const componentEl = r.component({goTo});
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(componentEl);
            }
        }
    }

    if ( location.pathname == "/"){
        goTo("/welcome")
    } else{
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    };
}