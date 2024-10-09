/* const txt = document.getElementById("textito").value


if(txt == "ale"){
    console.log("yes")
}else{
    console.log("no")
}
console.log("hola mundito") */


  // Selecciona el formulario y agrega un evento al enviarlo
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const valor = document.getElementById('nombre').value.trim(); // Obtiene el valor del input y elimina espacios en blanco

        if (valor === 'ale') {
        document.getElementById('resultado').textContent = "El texto es igual a 'ale'.";
        } else {
        document.getElementById('resultado').textContent = "El texto no es 'ale'.";
        }
    });