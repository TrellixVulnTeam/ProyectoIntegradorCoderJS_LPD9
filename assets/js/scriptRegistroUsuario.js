//variables del formulario de registro (registroUsuario.html)
//inputs del formulario
const nombreRegistroUsuario = document.getElementById("nombreRegistro")
const apellidoRegistroUsuario = document.getElementById("apellidoRegistro")
const edadRegistroUsuario = document.getElementById("edadRegistro")
const correoRegistroUsuario = document.getElementById("correoRegistro")
const contraseñaRegistroUsuario = document.getElementById("contraseñaRegistro")
//boton registrar del formulario de registro
const botonRegistrarUsuario = document.getElementById("botonRegistrar")
botonRegistrarUsuario.addEventListener("click", registrarNuevoUsuario)

let usuarios = JSON.parse(localStorage.getItem("usuarios"))

function registrarNuevoUsuario(){
    if(nombreRegistroUsuario.value != "" && apellidoRegistroUsuario.value != "" && edadRegistroUsuario.value != "" && correoRegistroUsuario.value != "" && contraseñaRegistroUsuario.value != ""){
        if(usuarios === null){
            let nuevoUsuario = {
                id: 1,
                nombre: nombreRegistroUsuario.value, 
                apellido: apellidoRegistroUsuario.value, 
                edad: edadRegistroUsuario.value, 
                correo: correoRegistroUsuario.value, 
                contraseña: contraseñaRegistroUsuario.value
            }
            usuarios = []
            usuarios.push(nuevoUsuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            Swal.fire({
            icon: 'success',
            title: 'Geniaaal!',
            text: 'Se ha registrado con éxito'
            })
            limpiarCampos()
        }else{
            let nuevoUsuario = {
                id: usuarios.length + 1,
                nombre: nombreRegistroUsuario.value, 
                apellido: apellidoRegistroUsuario.value, 
                edad: edadRegistroUsuario.value, 
                correo: correoRegistroUsuario.value, 
                contraseña: contraseñaRegistroUsuario.value
            }
            const validar = usuarios.some(usuario => usuario.correo === correoRegistroUsuario.value)
            if(validar){
            Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
                text: 'Ya existe un usuario con ese correo registrado'
            })}else{
            usuarios.push(nuevoUsuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            Swal.fire({
            icon: 'success',
            title: 'Geniaaal!',
            text: 'Se ha registrado con éxito'
            })
            limpiarCampos()
            }
            }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos deben ser completados'
        })
    }
}

function limpiarCampos(){
    document.getElementById("nombreRegistro").value = ""
    document.getElementById("apellidoRegistro").value = ""
    document.getElementById("edadRegistro").value = ""
    document.getElementById("correoRegistro").value = ""
    document.getElementById("contraseñaRegistro").value = ""
}