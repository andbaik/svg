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
    car.style.left = 400 + 'px';
}

function moveCarStartPosition(){
    console.log('Двойное нажатие');
        car.style.left = 0 + 'px';
}
/*


car.addEventListener('onclick', function() {
	console.log('одно нажатие');
    });

car.addEventListener('ondblclick', function() {
	console.log('Двойное нажатие'); 
});
*/