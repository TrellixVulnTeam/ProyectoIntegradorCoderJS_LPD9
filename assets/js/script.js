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




const correoUsuario = document.getElementById("correo")
const contraseñaUsuario = document.getElementById("contraseña")




function validarUsuario(){
    debugger
    if(correoUsuario.value != "" && contraseñaUsuario.value != ""){
        
        const validar = usuarios.some(usuario => usuario.correo === correoUsuario.value && usuario.contraseña === contraseñaUsuario.value)

        if(validar){
            alert("Usuario encontrado. Acceso exitoso")
            window.location = "/assets/pages/home.html"
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


