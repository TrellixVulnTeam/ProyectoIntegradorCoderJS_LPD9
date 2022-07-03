//variables del formulario de registro (registroUsuario.html)
//inputs del formulario
const correoRegistroUsuario = document.getElementById("correoRegistro")
const contraseñaRegistroUsuario = document.getElementById("contraseñaRegistro")
const contraseñaNuevaRegistroUsuario = document.getElementById("contraseñaNuevaRegistro")
//boton recuperar contraseña
const botonRecuperarContraseña = document.getElementById("botonRecuperar")
botonRecuperarContraseña.addEventListener("click", recuperarContraseña)

let usuarios = JSON.parse(localStorage.getItem("usuarios"))

function recuperarContraseña(){
    if(correoRegistroUsuario.value != "" && contraseñaRegistroUsuario.value != "" && contraseñaNuevaRegistroUsuario.value != ""){
        if(usuarios === null){
            Swal.fire({
                icon: 'error',
                title: 'Ooops',
                text: 'No existen usuarios registrados'
                })
        }else{
            if(contraseñaRegistroUsuario.value === contraseñaNuevaRegistroUsuario.value){
                const validar = usuarios.some(usuario => usuario.correo === correoRegistroUsuario.value)
                if(validar){
                    for(x of usuarios){
                        if(x.correo === correoRegistroUsuario.value){
                            x.contraseña = contraseñaRegistroUsuario.value
                        }
                    }
                    localStorage.setItem("usuarios", JSON.stringify(usuarios))
                    Swal.fire({
                        icon: 'success',
                        title: 'Geniaaal',
                        text: 'Contraseña recuperada correctamente!'
                        })
                    limpiarCampos()
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops',
                        text: 'No existe ningun usuario con ese correo registrado'
                        })
                }
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops',
                    text: 'Los campos contraseñas deben coincidir ambos'
                    })
            }
        }
    }
}

function limpiarCampos(){
    document.getElementById("correoRegistro").value = ""
    document.getElementById("contraseñaRegistro").value = ""
    document.getElementById("contraseñaNuevaRegistro").value = ""
}
