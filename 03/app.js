document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

} 
    const button = document.querySelector('button')
    const span = document.querySelector('span')

    if(button) {
        button.addEventListener('click', showId);
    }

    function showId() {
        
        const promise = fetch('https://api.ipify.org?format=json')

         promise
            .then(resp => {
                if(resp.ok){
                    
                    return resp.json();
                }
                return Promise.reject(resp);
            }
                )
            .then(data => {
                if(span){
                    return span.innerText = data.ip
                }
            })
            //.catch(err => console.error(err));  
    }
    
