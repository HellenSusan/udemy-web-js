function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const compraTv50 = trabalho1 && trabalho2 // E
    //const comprarTv32 = !!(trabalho1 ˆ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //XOR
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, compraTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
