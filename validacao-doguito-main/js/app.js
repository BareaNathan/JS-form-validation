import { valida } from "./validacao";

const inputs = document.querySelector('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})