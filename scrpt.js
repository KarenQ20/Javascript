let numero1, numero2;

do {
  numero1 = parseFloat(prompt("ingerse el año en que nacio"));
  numero2 = parseFloat(prompt("ingerse el año actual"));
} while (isNaN(numero1) || isNaN(numero2));

if (numero2 > numero1) {
  alert(`su edad es: ${numero2 - numero1}`);
} else {
  alert("usted no existe");
}
