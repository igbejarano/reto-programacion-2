const num1 = parseInt(prompt("Ingrese un numero"));
const num2 = parseInt(prompt("Ingrese otro numero"));

if (num1 > num2) {
  alert(`La suma es ${num1 + num2} y la diferencia es ${num1 - num2}`);
} else if (num2 > num1) {
  alert(`El producto es ${num1 * num2} y la division es ${num1 / num2}`);
}
