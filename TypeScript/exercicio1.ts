function somar(a,b){
    return a+b;
}
console.log(somar(5,"10"));//Resultado inesperado:"510"

function somar(a:number,b:number):number {
    return a+b;
}
console.log(somar(5,10));//Correto: 15
//console.log(somar(5,"10"));//Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.