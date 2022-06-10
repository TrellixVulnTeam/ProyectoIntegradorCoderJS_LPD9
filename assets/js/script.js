class Usuario{
    constructor(correo, contraseña){
        this.correo = correo
        this.contraseña = contraseña
    }
}
const correoUsuario = document.getElementById("correo")
const contraseñaUsuario = document.getElementById("contraseña")
const arrayUsuarios = []



function cargarUsuario(){
    if(correoUsuario.value != "" && contraseñaUsuario.value != ""){
        let usuarioNuevo = new Usuario(correoUsuario.value, contraseñaUsuario.value) 
        arrayUsuarios.push(usuarioNuevo)
        limpiarCampos()
    }
}

function limpiarCampos(){
    document.getElementById("correo").value = ""
    document.getElementById("contraseña").value = ""
}


