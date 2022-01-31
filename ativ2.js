function calculaIdade(anos){
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
  nome: "Naiade",
  idade: 31
}

const pessoa2 = {
  nome: "Igor",
  idade: 25
}

const animal1 = {
  nome: "Haru",
  idade: 2,
  raca: "spietzel"
}

const animal2 = {
  nome: "WarWick",
  idade: 1.5,
  raca: "Pastor Alemão"
}

console.log(calculaIdade.apply(pessoa2, [5]))