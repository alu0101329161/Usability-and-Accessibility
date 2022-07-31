let data;
document.querySelector('form')
  .addEventListener('submit', e => {
    e.preventDefault()
    if (validacionTexto() & validacionEmail()) {

      data = Object.fromEntries(
        new FormData(e.target)
      )
      // alert(JSON.stringify(data))
      console.table(data)
      realizarPost();
    } else {
      console.log("Datos mal introducidos");
    }
  })

function realizarPost() {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

}

function validacionTexto() {
  var valor = $("#nombres").val();
  var valor1 = $("#apellidos").val();
  var valor3 = $("#lugar_nacimiento").val();
  if (valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor)) {
    //alert('ERROR: El nombre solo puede contener letras.');
    document.getElementById("nombres").ariaLabel = "El nombre solo debe contener letras";
    document.getElementById("nombres").focus();
    document.getElementById("errorNombre").className = "white-text text-darken-3";
    document.getElementById("errorNombre").innerHTML = "El nombre solo debe contener letras";
    return false;
  } else {
    document.getElementById("errorNombre").className = "white-text text-darken-3";
    document.getElementById("errorNombre").innerHTML = "Nombre correcto";
  }
  if (valor1 == null || valor1.length == 0 || !/^[A-Z]+$/i.test(valor1)) {
    //alert('ERROR: El nombre solo puede contener letras.');
    document.getElementById("apellidos").ariaLabel = "Los apellidos solo deben contener letras";
    document.getElementById("apellidos").focus();
    document.getElementById("errorApellido").className = "white-text text-darken-3";
    document.getElementById("errorApellido").innerHTML = "El apellido solo debe contener letras";
    return false;
  } else {
    document.getElementById("errorApellido").className = "white-text text-darken-3";
    document.getElementById("errorApellido").innerHTML = "Apellido correcto";
  }
  if (valor3 == null || valor3.length == 0 || !/^[A-Z]+$/i.test(valor3)) {
    //alert('ERROR: El nombre solo puede contener letras.');
    document.getElementById("lugar_nacimiento").ariaLabel = "El lugar de nacimiento solo debe contener letras";
    document.getElementById("lugar_nacimiento").focus();
    document.getElementById("errorNacimiento").className = "white-text text-darken-3";
    document.getElementById("errorNacimiento").innerHTML = "El lugar de nacimiento solo puede contener letras";
    return false;
  } else {
    document.getElementById("errorNacimiento").className = "white-text text-darken-3";
    document.getElementById("errorNacimiento").innerHTML = "El lugar de nacimiento es correcto";
  }
  return true
}

function validacionEmail() {
  var valor = $("#correo").val();
  if (valor == null || valor.length == 0 || !/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(valor)) {
    document.getElementById("correo").ariaLabel = "El formato del email es incorrecto, un ejemplo de sería anonimo@gmail.com";
    document.getElementById("correo").focus();
    document.getElementById("errorCorreo").className = "white-text text-darken-3";
    document.getElementById("errorCorreo").innerHTML = "El formato de email es incorrecto";
    return false
  } else {
    document.getElementById("errorCorreo").className = "white-text text-darken-3";
    document.getElementById("errorCorreo").innerHTML = "El correo es correcto";
  }
  return true;
}




function validacionNumero() {
  var valor = $("#año_input").val();
  if (valor == null || valor.length == 0 || !/^[0-9]+$/.test(valor)) {

    return false;
  }
  var valor = $("#cuenta_input").val();
  if (valor == null || valor.length == 0 || !/^[0-9]+$/.test(valor)) {

    return false;
  }
  return true;
}

function validacionDNI() {
  var valor = $("#dni_input").val();
  if (valor == null || valor.length == 0 || !/^(\d{8})([-]?)([A-Z]{1})$/.test(valor)) {

    return false;
  }
  return true
}

function validacionContraseña() {
  var valor = $("#contraseña_input").val();
  if (valor == null || valor.length == 0 || !/^(?=\w\d)(?=\w[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valor)) {

    return false;
  }
  return true
}

function validacionPago() {
  var valor = $("#pago_input").val();
  if (valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor)) {
    return false;
  }
  return true;
}