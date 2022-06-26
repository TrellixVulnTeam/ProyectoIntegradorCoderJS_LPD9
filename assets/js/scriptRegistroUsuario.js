//importo el array de objetos usuarios del archivo script.js
import { usuarios } from "./script"
console.log(usuarios)

//inputs del formulario
const nombreRegistroUsuario = document.getElementById("nombreRegistro")
const apellidoRegistroUsuario = document.getElementById("apellidoRegistro")
const edadRegistroUsuario = document.getElementById("edadRegistro")
const correoRegistroUsuario = document.getElementById("correoRegistro")
const contraseñaRegistroUsuario = document.getElementById("contraseñaRegistro")
//boton registrar del formulario
const botonRegistrarUsuario = document.getElementById("botonRegistrar")
botonRegistrarUsuario.addEventListener("click", registrarUsuario)

function registrarUsuario(){
    alert("Registrar usuario")
}
