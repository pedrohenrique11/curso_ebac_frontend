const valueA = document.querySelector('#valueA');
const valueB = document.querySelector('#valueB');
const form = document.querySelector('form')
const button = document.querySelector('#button');
const result = document.querySelector('#result');



form.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    checkValue()
})

function checkValue() {
    const a = valueA.value;
    const b = valueB.value;

    result.style.display='block';
 
    if (a <= b) {
        result.innerHTML="<p>Tente Novamente!</p>";
    }
    else result.innerHTML="<p>Valor de A é maior que o valor de B!</p>"
}