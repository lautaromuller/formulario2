let precioPlan = document.querySelector(".plan_elegido");
let opcionElegida = document.getElementById("seguro");

opcionElegida.addEventListener("click",function() {
    if(opcionElegida.value == ""){
        precioPlan.innerHTML = "Por favor, seleccione un plan";
        precioPlan.setAttribute("hidden","1");
    }
    else if(opcionElegida.value == "basico"){
        precioPlan.innerHTML = "Básico: $500";
        precioPlan.removeAttribute("hidden");
    }
    else if(opcionElegida.value == "intermedio"){
        precioPlan.innerHTML = "Intermedio: $1000";
        precioPlan.removeAttribute("hidden");
    }
    else if(opcionElegida.value == "premium"){
        precioPlan.innerHTML = "Premium: $1500";
        precioPlan.removeAttribute("hidden");
    }
});

document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    let nombre = document.getElementById('nombre')
    let errorNombre = document.getElementById('errorNombre')

    if(nombre.value.trim() === ""){
        errorNombre.textContent = 'Ingrese un nombre válido'
        errorNombre.classList.add('mensaje-error')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('mensaje-error')
    }

    let apellido = document.getElementById('apellido')
    let errorApellido = document.getElementById('errorApellido')

    if(apellido.value.trim() === ""){
        errorApellido.textContent = 'Ingrese un apellido válido'
        errorApellido.classList.add('mensaje-error')
    }else{
        errorApellido.textContent = ''
        errorApellido.classList.remove('mensaje-error')
    }

    let dni = document.getElementById('dni')
    let errorDni = document.getElementById('errorDni')

    if(dni.value < 10000000){
        errorDni.textContent = 'El DNI debe tener 8 caracteres y no contener puntos'
        errorDni.classList.add('mensaje-error')
    }else{
        errorDni.textContent = ''
        errorDni.classList.remove('mensaje-error')
    }

    let email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')
    let patternEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!patternEmail.test(email.value)){
        errorEmail.textContent = 'Ingrese un mail válido'
        errorEmail.classList.add('mensaje-error')
    }else{
        errorEmail.textContent = ''
        errorEmail.classList.remove('mensaje-error')
    }

    let telefono = document.getElementById('telefono')
    let errorTelefono = document.getElementById('errorTelefono')

    if(telefono.value < 1100000000){
        errorTelefono.textContent = 'El telefono debe tener 10 caracteres y no contener puntos ni guiones'
        errorTelefono.classList.add('mensaje-error')
    }else{
        errorTelefono.textContent = ''
        errorTelefono.classList.remove('mensaje-error')
    }

    let inputs = [[nombre, errorNombre], [apellido, errorApellido], [dni, errorDni], [email, errorEmail], [telefono, errorTelefono]]
    
    inputs.forEach(input =>{
        input[0].addEventListener('focus', e =>{
            input[1].textContent = ''
            input[0].classList.add("margen")
        })
    })

    if(!errorNombre.textContent && !errorApellido && !errorDni && !errorEmail && !errorTelefono && opcionElegida.value != ""){
        alert ('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset()
    }else{
        inputs.forEach(input =>{
            if(!input[1].textContent){
                input[0].classList.add("margen")
            }else{
                input[0].classList.remove("margen")
            }
        })
        if(opcionElegida.value == ""){
            precioPlan.innerHTML = "Por favor, seleccione un plan";
            precioPlan.removeAttribute("hidden")
        }
    }

})

