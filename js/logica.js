const input = document.getElementById('input')

function logica(){
    setInterval('ejecutar()', 200);
}

function ejecutar() {

    ingreso = input.value;
    
    if(/(^[A-Z]\d{3}[a-z]{3}\W{3}$)/g.test(ingreso)){

        document.getElementById('input_group').classList.remove('formulario_incorrecto')
        document.getElementById('input_group').classList.add('formulario_correcto')

    } else {
        document.getElementById('input_group').classList.remove('formulario_correcto')
        document.getElementById('input_group').classList.add('formulario_incorrecto')

    }
}
