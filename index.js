document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let nome = form.querySelector("input[placeholder='Nome completo:']").value.trim();
        let email = form.querySelector("input[placeholder='Seu e-mail:']").value.trim();
        let celular = form.querySelector("input[placeholder='Seu celular:']").value.trim();
        let mensagem = form.querySelector("textarea").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        form.reset(); 
    });
});
