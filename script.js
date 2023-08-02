// Função Auto-Destruir!
function autoDestruir() {
    const riddles = [
      "O que é, o que é? Fica no canto e viaja o mundo? Um selo!",
      "O que é, o que é? Quanto mais seca, mais molhada fica? Uma toalha!",
      "O que é, o que é? Entra na água e não se molha? A sombra!",
    ];
  
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    alert(randomRiddle);
  }
  