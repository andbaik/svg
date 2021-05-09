function changeBGL() {
    let object = document.querySelector("#wheel_1");
    object.style.fill = "#3B499B";
    //удалить ховер эффект    
}
function changeBGR() {
    let object = document.querySelector("#wheel_2");
    object.style.fill = "#3B499B";
    //удалить ховер эффект    
}

let car = document.querySelector('#Layer_1');

car.addEventListener('onclick', function() {
	console.log('одно нажатие');
    });

car.addEventListener('ondblclick', function() {
	console.log('Двойное нажатие'); 
});

