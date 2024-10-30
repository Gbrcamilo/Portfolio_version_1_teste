function toggleTheme() {
    const body = document.body;
    const torchIcon = document.getElementById("torch-icon");

  // Alterna entre os temas claro e escuro
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

  // Alterna a imagem da tocha entre acesa e apagada
    if (body.classList.contains("dark-theme")) {
    torchIcon.src = "img/tocha_acessa.png";
    } else {
    torchIcon.src = "img/tocha_apagada.png";
    }
}

// Define o tema inicial como claro
document.body.classList.add("light-theme");
