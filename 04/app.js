document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const form = document.querySelector('.form');
    const latEl = document.querySelector('.weather__lat');
    const lonEl = document.querySelector('.weather__lng');
    const resultName = document.querySelector('.weather__summary');
    const temp = document.querySelector('.weather__temperature')

    form.addEventListener('submit', clickHandler);
   

    function clickHandler(e) {
        e.preventDefault();

       
        const lat = e.target[0];
        const lon = e.target[1]
        

        latEl.innerText = lat.value;
        lonEl.innerText = lon.value;

        const key = 'a36c643725f7e1f5e267e2eb22179a0c';
        fetch(`http://api.weatherapi.com/v1/current.json?key=beac70e0629f44999b064940223012&q=${lat.value},${lon.value}&aqi=no`)
        //fetch(`http://api.weatherapi.com/v1/current.json?key=beac70e0629f44999b064940223012&lat=${lat.value}&lon=${lng.value}`)
        // fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${key}`)

        // fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat.value}&lon=${lng.value}&units=I&lang=pl`)
            .then(resp => {
                if(resp.ok) { return resp.json(); }
            })
            .then(data => {
                console.log(data);
                resultName.innerText = data.location.name
                temp.innerText = data.current.temp_f
                ;
            })
            .catch(err => console.error(err)); 
    }
}