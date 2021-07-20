import createIndex from './index.js';
import Weather from './weather.js';
import Location from './getlocation.js';
import './style.css';
import createDetails from './createdetails.js';

async function main() {
    createIndex();
    let location = new Location();
    //let userLocation = await location();
    //let weather = await loadWeather(location.getAddress());
    let weather = new Weather(await location.getAddress());
    let message = await weather.load();
    document.getElementById("message").innerText = message;
    createDetails(weather.details);
}

main();