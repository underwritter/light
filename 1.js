const lights = document.querySelectorAll('.light');
let activLight = 0;

setInterval(() => {
    changeLight()
}, 1500)

function changeLight () {
    lights[activLight].className = 'light';
    activLight++

    if (activLight > 2){
        activLight = 0
    }

    const currentLight = lights[activLight];

    currentLight.classList.add(currentLight.getAttribute('color'))
}