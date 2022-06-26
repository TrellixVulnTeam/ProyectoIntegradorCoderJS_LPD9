export const usuarios = [{
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
        
        const validar = usuarios.some(usuario => usuario.correo === correoUsuario.value && usuario.contraseña === contraseñaUsuario.value)
        if(validar){
            window.location = "/assets/pages/home.html"
            const h1HomeBienvenido = document.getElementById("h1-home-bienvenido")
        }else{
            alert("Usuario no encontrado.")
        }
    
        limpiarCampos()
    
    }else{
        alert("Debe completar los campos correo y contraseña. No pueden estar vacios")
    }
}

function limpiarCampos(){
    document.getElementById("correo").value = ""
    document.getElementById("contraseña").value = ""
}




