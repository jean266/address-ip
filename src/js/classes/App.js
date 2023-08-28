
import { btnSubmit } from "../util/selectors.js";
import IpAddress from "./IpAddress.js";
import UI from "./UI.js";

//* Instanciar
const ip = new IpAddress();
const ui = new UI();

export default class App {

    constructor () {
        document.addEventListener('DOMContentLoaded', () => {
            ui.showMap();
            ip.searchIP()
            this.initApp();
        })
    }

    initApp() {
        // Eventos
        btnSubmit.addEventListener('click', e => {
            ip.searchIP(e);
        });
    }
}