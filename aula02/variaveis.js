var numero = 2;
let texto = "Hello";
const oQueEisson = "?";


// O ponto e virgula é opcional! Boas práticas o usam 

console.log('Tipo var:', numero)
// concatenar com vírgula me garante um espaço


numero = 13;
console.log(texto + " o número agora é " + numero)
console.log(texto, "o número agora é"  ,numero)
console.log(`${texto} o número agora é ${numero}`)

texto = 69

console.log(texto + numero)
// concatenar com + dois valores numericos vai
// acabar somando

//  console.log(OqueEisso)

// Constantes não podem ter novos valores assinalados a ela

// oQueEisso = "uma constante????"

// console.log(OqueEisso)