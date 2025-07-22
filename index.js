
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formFun");

  const camposObrigatorios = [
    "nome", "sobrenome", "idade", "celular", "principal",
    "whatssap", "email", "corporativo"
  ];

  const celularInput = document.getElementById("celular");
  celularInput.addEventListener("input", () => {
    let valor = celularInput.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      celularInput.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      celularInput.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else {
      celularInput.value = valor;
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;
    let mensagens = [];

    
    camposObrigatorios.forEach(id => {
      const campo = document.getElementById(id);
      campo.classList.remove("erro");
    });


    camposObrigatorios.forEach(id => {
      const campo = document.getElementById(id);
      if (!campo || campo.value.trim() === "") {
        campo.classList.add("erro");
        mensagens.push(`O campo "${campo.name || id}" é obrigatório.`);
        valido = false;
      }
    });

    
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email").classList.add("erro");
      mensagens.push("Digite um e-mail válido.");
      valido = false;
    }

    if (!valido) {
      alert(mensagens.join("\n"));
      return;
    }

    alert("Formulário enviado com sucesso!");
  });
});