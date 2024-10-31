document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if(num2 > num1){
        alert("Sucesso: O número B é maior que o número A!");
    } else {
        alert("Erro: O número B não pode ser menor que o número A!")
    }
});