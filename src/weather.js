//let weatherkey = "e9d9b7c16aef4482821201246211807";
//let message = "";
//let locationkey = "8b457aaaffcbf97107c32913d38e2edd";

export default class Weather{
    constructor(location) {
        this.location = location;
        this.details = {};
        this.key = "e9d9b7c16aef4482821201246211807";
    }

    async load() {
        let res = await fetch('https://api.weatherapi.com/v1/current.json?key=' + this.key + '&q=' + this.location + '&aqi=no',
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
        this.details = await res.json();
        console.log(this.details);

        if (this.details.current.uv > 2) {
            return 'Yes, you need suncream today.';
        }
        else {
            return "No, you're safe from the sun today.";
        }
    }
}

/*

export default async function loadWeather(location) {
    let res = await fetch('http://api.weatherapi.com/v1/current.json?key=' + weatherkey + '&q=' + location + '&aqi=no',
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
    let json = await res.json();

    if (json.current.uv > 2) {
        return 'Yes, you need suncream today.';
    }
    else {
        return "No, you're safe from the sun today.";
    }
}

/*        .then(response => response.json())
        .then(details => {
            console.log(details);
            if (details.current.uv > 2) {
                return 'Yes, you need suncream today.';
            }
            else {
                return "No, you're safe from the sun today.";
            }
        })



        
fetch(`http://api.ipstack.com/check?access_key=`+locationkey, {
    method: 'get',
})
.then(response => response.json())
.then(details=> {
    console.log(details);
    fetch(`http://api.weatherapi.com/v1/current.json?key=` + weatherkey + `&q=` + details.zip + `&aqi=no`, {
        method: 'get'
    })
    .then(response => response.json())
    .then(details =>{
        console.log(details);
        if(details.current.uv > 2){
            warning = "Yes, you need suncream today.";
        }
        else {
            warning = "No, you're safe from the sun today.";
        }
        
        document.getElementById("message").innerText = warning;
    })
})
*/