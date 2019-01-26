(function(){
    'use strict';
    // Variaveis de inputs e botões
    let $inputControls = document.querySelectorAll('.input-control');
    let $txtPeso = document.getElementById('txtPeso');
    let $txtAltura = document.getElementById('txtAltura');
    let $btnCalc = document.getElementById('btnCalc');
    // Variaveis de resultado
    let $valorImc = document.getElementById('valorImc');
    let $msgImc = document.getElementById('msgImc');

    mudaCorNumXCar();

    $btnCalc.addEventListener('click', (e) => {

        if(!$txtPeso.value || !$txtAltura.value){
            $inputControls.forEach((inputControl) => {
                inputControl.classList.remove('ok');
                inputControl.classList.add('erro');
            });
        }

        else {
            $inputControls.forEach((inputControl) => {
                inputControl.classList.remove('erro');
            });
            imcCalculado();
        }

    });

    function mudaCorNumXCar(){
        $inputControls.forEach((inputControl) => {
            inputControl.addEventListener('input', () => {
                if(inputControl.value.length > 1){
                    inputControl.classList.remove('erro');
                    inputControl.classList.add('ok');
                }
                else {
                    inputControl.classList.remove('ok');
                    inputControl.classList.add('erro');
                }
            });
        });
    }

    function imcCalculado(){
        let resultImc;
        // Transformando valores do input em Float
        let $txtPeso2 = parseFloat($txtPeso.value);
        let $txtAltura2 = parseFloat($txtAltura.value);

        resultImc = ($txtPeso2 / ($txtAltura2 * $txtAltura2)).toFixed(2);

        // Mensagem sobre a situação de acordo com a tabela de IMC
        if(resultImc < 17){
            $msgImc.innerText = 'Muito abaixo do peso';
        } 
        else if(resultImc >= 17 && resultImc <= 18.49) {
            $msgImc.innerText = 'Abaixo do peso';
        }
        else if(resultImc >= 18.5 && resultImc <= 24.99){
            $msgImc.innerText = 'Peso normal';
        }
        else if(resultImc >= 25 && resultImc <= 29.99){
            $msgImc.innerText = 'Acima do peso';
        }
        else if(resultImc >= 30 && resultImc <= 34.99){
            $msgImc.innerText = 'Obesidade I';
        }
        else if(resultImc >= 35 && resultImc <= 39.99){
            $msgImc.innerText = 'Obesidade II (Severa)';
        }
        else {
            $msgImc.innerText = 'Obesidade III (Mórbida)';
        }

        // Resultado calculado do IMC
        $valorImc.innerText = resultImc;
    }

})();