document.addEventListener("DOMContentLoaded", function () { //A função só funcionará se o HTML for carregado
    const form = document.querySelector("form"); //Ele faz uma referência aos forms criados na página contato.html

    form.addEventListener("submit", function (event) {
        event.preventDefault(); //Ele não deixa que o formulário seja enviado previamente

        let nome = form.querySelector("input[placeholder='Nome completo:']").value.trim();
        let email = form.querySelector("input[placeholder='Seu e-mail:']").value.trim();
        let celular = form.querySelector("input[placeholder='Seu celular:']").value.trim();
        let mensagem = form.querySelector("textarea").value.trim();  //Nessa parte ele pega os valores dos campos preenchidos

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!"); //Se esse campos estiverem vazios, a mensagem é exibida
            return;
        }

        form.reset(); //O formulário é resetado
    });
});
