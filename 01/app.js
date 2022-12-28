document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
    setBorderColorAsync(divList[1], 'blue')
    setBorderColorAsync(divList[2], 'green')


    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });

}

// function setBorderColorAsync(element, color, callback) {
//     setTimeout(() => {
//         element.style.border = `3px solid ${color}`;
//         callback();
//     }, Math.random() * 3000);
// }

const setBorderColorAsync = (element, color) => {
    const promise = new Promise((resolve) => {
        resolve(setTimeout(() => {
            element.style.border = `3px solid ${color}`;

        }, Math.random() * 3000))
    })

    return promise
}


