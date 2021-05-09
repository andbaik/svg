function changeBGL() {
    let object = document.querySelector("#wheel_1");
    object.style.fill = "#3B499B";
}
function changeBGR() {
    let object = document.querySelector("#wheel_2");
    object.style.fill = "#3B499B";
}

let car = document.querySelector('#Layer_1');
function moveCar(){
    console.log('Одно нажатие');
    car.style.transform = 'translateX(1000px)';
}

function moveCarStartPosition(){
    console.log('Двойное нажатие');
    car.style.transform = 'translateX(0px)';
}
