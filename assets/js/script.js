const usuarios = [{
    id: 1,
    nombre: 'diego',
    apellido: 'suarez',
    edad: 25,
    correo: 'diego@gmail.com',
    contraseña: '1234'
},
{
    id: 2,
    nombre: 'tomas',
    apellido: 'lopez',
    edad: 31,
    correo: 'tomas@gmail.com',
    contraseña: '1990'
},
{
    id:3,
    nombre: 'eugenia',
    apellido: 'balmaceda',
    edad: 20,
    correo: 'eugenia@gmail.com',
    contraseña: '1445'
},
{
    id:4,
    nombre: 'georgina',
    apellido: 'velez',
    edad: 38,
    correo: 'georgina@gmail.com',
    contraseña: '1667'
},
{
    id:5,
    nombre: 'ruben',
    apellido: 'toranzo',
    edad: 29,
    correo: 'ruben@gmail.com',
    contraseña: '1330'
}]


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
    alert("Esta funcionalidad está en proceso")
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




