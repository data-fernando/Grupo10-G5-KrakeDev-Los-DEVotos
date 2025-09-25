saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let resultado = generarSaludo(nombre,apellido);
    // console.log(resultado);
    return resultado
}

probarFuncion=function(){
    let mensaje=saludar()
    mostrarTexto("lblResultado",mensaje)

}