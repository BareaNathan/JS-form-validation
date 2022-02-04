import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    if(input.dataset.tipo === 'preco'){
        SimpleMaskMoney.setMask(input,{
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            thousandsSeparator: '.',
            decimalSeparator: ',',
            cursor: 'end'
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})