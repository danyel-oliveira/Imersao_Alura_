//Lista com 3 jogadores

personagem = ["", "", ""]

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

for(let i=0; i<3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem: " +  (i + 1))
  personagem[i] = escolhaPersonagem
  
  //Força de cada jogador e somar força do time
  
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  //forcaPersonagem += Math.floor(Math.random() * 10) + 1      --->   Código acima mais otimizado
}
console.log("Agora o array personagem tem: " + personagem)
console.log("Início Vilões: " + viloes)

for(let i=0; i<3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 10)
  viloesPossiveis = ["Pain", "Sasori", "Deidara", "Kakuzu", "Itachi", "Kisame", "Tobi", "Orochimaru", "Zetsu", "Hidan"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  
  //Calcular força do computador
  
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1  
}

console.log("Vilões Agora: " + viloes)

//Comparar os times para saber quem venceu

if (forcaPersonagem > forcaViloes) {
  alert("Seu time venceu! Sua força foi: " + forcaPersonagem)
}
else {
  if (forcaPersonagem < forcaViloes) {
    alert("Vitória da Akatsuki! O poder foi de: " + forcaViloes)
  }
  else {
    alert("Houve empate!")
  }
}