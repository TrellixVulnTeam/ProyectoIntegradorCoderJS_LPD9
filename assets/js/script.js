//variables del login

const correoUsuario = document.getElementById("correo")
const contraseñaUsuario = document.getElementById("contraseña")
const botonIniciarSesion = document.getElementById("iniciar-sesion")
botonIniciarSesion.addEventListener("click", validarUsuario)
const botonRegistrame = document.getElementById("registrame")
botonRegistrame.addEventListener("click", function(){
    window.location = "/assets/pages/registroUsuario.html"
})
const botonRecuperarContraseña = document.getElementById("recuperar-contraseña")
botonRecuperarContraseña.addEventListener("click", function(){
    Swal.fire({
        icon: 'info',
        title: 'Ooops',
        text: 'Esta funcionalidad está en proceso!'
        })
})
const botonFacebook = document.getElementById("boton-facebook")
botonFacebook.addEventListener("click", function(){
    alert("Redireccionando a Facebook")
    window.location.href = "https://www.facebook.com"
})
const botonInstagram = document.getElementById("boton-instagram")
botonInstagram.addEventListener("click", function(){
    alert("Redireccionando a Instagram")
    window.location.href = "https://www.instagram.com"
})

function validarUsuario(){
    if(correoUsuario.value != "" && contraseñaUsuario.value != ""){
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        if(usuarios === null){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no existente'
            })
        }else{
        const validar = usuarios.some(usuario => usuario.correo === correoUsuario.value && usuario.contraseña === contraseñaUsuario.value)
        if(validar){
            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'Bienvenido'
            })
            window.location = "/assets/pages/home.html"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario y/o contraseña no válido'
            })
        }
        }
        limpiarCampos()
    
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe completar los campos correo y contraseña'
        })
    }
}

function limpiarCampos(){
    document.getElementById("correo").value = ""
    document.getElementById("contraseña").value = ""
}




