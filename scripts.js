let car = document.querySelector(".car");
let carColor = document.getElementById("carColor");
car.style.backgroundColor = carColor.value;
carColor.oninput = () => {
  car.style.backgroundColor = carColor.value;
}