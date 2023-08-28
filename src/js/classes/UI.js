
import { ipParagraph, locationParagraph, timezoneParagraph, ispParagraph } from "../util/selectors.js";

let map;

export default class UI {

    showDataIP(data) {
        const { ip, city, region_code, postal, connection, timezone, latitude, longitude } = data;

        // Llenar los campos con los datos
        ipParagraph.textContent = ip;   
        locationParagraph.textContent = `${city}, ${region_code} ${postal}`; 
        timezoneParagraph.textContent = `UTC ${timezone.utc}`;   
        ispParagraph.textContent = connection.org;
    }

    showMap() {
        map = L.map('map', {
            zoomControl: false,

        }).setView([0, 0], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap',
        }).addTo(map);
    }

    showMaker(latitude, longitude) {
        
        let myIcon = L.icon({
            iconUrl: 'img/icon-location.svg',
            iconSize: [38, 45],
        });
        
        let marker = L.marker([latitude, longitude], {icon: myIcon}).addTo(map);
        
        map.fitBounds([
            [marker.getLatLng().lat, marker.getLatLng().lng]
        ]);
    }
}