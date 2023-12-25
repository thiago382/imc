const peso = 60;
const altura = 1.69;
const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if(imc < 18.5){
    console.log('Abaixo do peso');
}

else if(imc >= 18.5 && imc < 24.9){
    console.log('Peso normal');
}
 else if(imc >= 25 && imc < 29.9){
    console.log('Acima do peso');
 }

 else if(imc >= 30 && imc < 40){
    console.log('Obesidade');
 }

 else {
    console.log('Obesidade grave');
 }