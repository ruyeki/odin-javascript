//API KEY: 9Q3NGV74CM8JH4W9KKX3ZWJWB

async function getWeather() {

    //getting user input for location
    let location = prompt("Please enter a location: ");
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`;
    let key = `?key=9Q3NGV74CM8JH4W9KKX3ZWJWB`;
    let final_url = url+key;
    //console.log(final_url);

    //filter only necessary weather data
    fetch(final_url)
        
        .then(async function(response) {
            const data = await response.json();
            //console.log(data);

            let current_temp = data.currentConditions.temp;
            //console.log(current_temp);

            let week_forecast_arr = [];

            for(let i = 0; i<7; i++){
                week_forecast_arr.push(data.days[i].temp);
            }

            //console.log(week_forecast_arr);

            return{
                curr: current_temp,
                weekly_forecast: week_forecast_arr
            }

        })

        .then(async function(filtered_obj){
            let current_display = document.getElementById("current_display");
            current_display.textContent = `Current temperature: ${filtered_obj.curr}`;
            let weekly_display = document.getElementById("weekly_display");
            weekly_display.textContent = `Weekly temperature: ${filtered_obj.weekly_forecast}`;


        })
        

        .catch(function(err) {
            console.log(err);
        });

        mode: 'cors'
        
}


getWeather();