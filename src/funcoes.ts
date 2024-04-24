// multiplicação
function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

const multiplicarArrow = (numero1: number, numero2: number): number => numero1 * numero2;

//saudação
function saudacao(nome: string): string {
    return "Olá" + nome;
}

const saudacaoParaMarcela = saudacao('Marcela');
console.log(saudacaoParaMarcela);