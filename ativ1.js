const aluno = [
  {
    nome: "Igor",
    nota: 9.6,
    turma: "2A"
  },
  {
    nome: "Naiade",
    nota: 10,
    turma: "3A"
  },
  {
    nome: "Junin",
    nota: 3.6,
    turma: "1A"
  },
  {
    nome: "Isabola",
    nota: 4.5,
    turma: "2B"
  },
  {
    nome: "Cavani",
    nota: 8,
    turma: "2B"
  }

]




function alunosAprovados(arr, media){
  let aprovados = [];
  for(let i = 0; i<arr.length; i++){

    const {nota, nome} = arr[i];

    if(nota >= media){
      aprovados.push(nome);
    }
  }
  return aprovados;
}
console.log(alunosAprovados(aluno, 5))