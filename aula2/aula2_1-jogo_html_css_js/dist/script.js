// Operadores
let idade = prompt("Quantos anos você tem?");

if (idade < 18) {
  alert("Você NÃO pode jogar jokenpo");
} else {
  
  alert("Vamos começar a jogar!");

  let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
  let escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Pedra, Computador Pedra --> empate!!!
  // Jogador Tesoura, Computador Tesoura --> empate!!!
  // Jogador Papel, Computador Papel --> empate!!!
  if (escolhaJogador == escolhaComputador) {
    alert("Empate!!");
  } else if (escolhaJogador == 1) {
    
    // Jogador escolheu Pedra
    if (escolhaComputador == 2) {
      
      // Jogador Pedra, Computador Papel --> Computador vence
      alert("Computador venceu, escolheu Papel!!");
    } else {
      
      // Jogador Pedra, Computador Tesoura --> Jogador vence
      alert("Jogador venceu, computador escolheu Tesoura!!");
    }

  } else if (escolhaJogador == 2) {
    
    // Jogador escolheu Papel
    if (escolhaComputador == 1) {
      
      // Jogador Papel, Computador Pedra --> Jogador vence
      alert("Jogador venceu, computador escolheu Pedra!!");
    } else {
      
      // Jogador Papel, Computador Tesoura --> Computador vence
      alert("Computador venceu, escolheu Tesoura!!");
    }

  } else if (escolhaJogador == 3) {
    
    // Jogador escolheu Tesoura
    if (escolhaComputador == 1) {
      
      // Jogador Tesoura, Computador Pedra --> Computador vence
      alert("Computador venceu, escolheu Pedra!!");
    } else {
      
      // Jogador Tesoura, Computador Papel --> Jogador vence
      alert("Jogador venceu, computador escolheu Papel!!");
    }

  } else {
    alert("Escolha inválida! Por favor, digite 1, 2 ou 3.");
  }

  alert("A escolha do computador: " + escolhaComputador);
}