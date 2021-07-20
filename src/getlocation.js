export default class Location {
    constructor() {
        this.position = {};
        this.loaded = false;
    }

    getCoordinates() {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    async getAddress() {
        this.position = await this.getCoordinates(); 
        let latitude = this.position.coords.latitude;
        let longitude = this.position.coords.longitude;
      
        // Actually return a value
        this.loaded = true;
        let result = latitude.toFixed(2) + "," + longitude.toFixed(2);
        console.log(result);
        return result;
    }
}