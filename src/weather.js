import React from 'react';


const api_key = "bb00579aa9065dd7cebacab52d25b101";

function Weather({temp, setTemp, wind, setWind, desc, setDesc}) {

    const search = async() => {
        try {
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=vahto&APPID=${api_key}&lang=fi`);
            const response = await api_call.json();

            if(response.main){
                setTemp((response.main.temp - 273.15).toFixed(1) + '°C');
                setDesc(response.weather[0].description);
                setWind(response.wind.speed);
            }
        }
        catch (exception) {
            console.log('error')
        }
    }
    search();

    return(
        <div>
            <p style={style}>{temp} {desc}<br></br>Tuuli: {wind} m/s</p>
        </div>
    )
}

const style = {
    color: 'yellow',
    fontSize: 12
}

export default Weather;