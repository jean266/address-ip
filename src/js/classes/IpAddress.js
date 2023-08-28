import { inputIP } from "../util/selectors.js";
import UI from "./UI.js";

//* instanciar 
const ui = new UI();

export default class IpAddress {

    searchIP(e = "") {
        if(e) {
            e.preventDefault();
        }

        const url = `http://ipwho.is/${inputIP.value}`;

        fetch( url )
            .then( anwser => anwser.json() )
            .then( data => {
                ui.showDataIP(data);

                // Mostrar el mapa
                ui.showMaker(data.latitude, data.longitude);
            });
    }

}