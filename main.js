document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    
    if (campoB > campoA) {
        document.getElementById("resultado").innerHTML = "Formulário válido!";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
        document.getElementById("resultado").style.color = "red";
    }
});
