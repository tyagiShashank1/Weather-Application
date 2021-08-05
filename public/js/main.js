const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const day=document.getElementById('day');
const todayData=document.getElementById('todayData');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write the city name before search`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=df2ca677d82e695047743c4fb7e82f96`;
            const response = await fetch(url);
            const Data = await response.json();
            console.log(Data);
            const arrData = [Data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_real.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_statusinnerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');
        }                                     
        
        catch {
            document.getElementById('city_name').innerText = `Please enter proper city name`;
            datahide.classList.add('data_hide');

        }


    }

}

submitBtn.addEventListener("click", getInfo);






