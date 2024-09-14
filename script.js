document.getElementById("get-weather").addEventListener("click", function() {
    const location = document.getElementById("location").value;
    const apiKey = "a36e98b89bef46298e9133645242508";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src ="${data.current.condition.icon}" alt="Weather Icon">
         `;
    })
    .catch (error=>{
        console.error("Error in Fetching the weather data",error)
    });
});