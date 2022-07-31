function clasifyPrice(coin) {
    if (coin == "Cardano" || coin == "cardano" || coin == "ADA") {
        return 1.2
    } else if (coin == "Bitcoin" || coin == "bitcoin" || coin == "BTC") {
        return 27368.36
    } else {
        return "No disponible"
    }
}

function validacionTiposBoton() {
    var valor = $("#correo").val();
    let flagCorreo = false;
    if (valor == null || valor.length == 0 || !/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(valor)) {
      document.getElementById("errorCorreo").hidden = false;
      document.getElementById("correo").ariaLabel = "El formato del email es incorrecto, un ejemplo de sería anonimo@gmail.com";
      document.getElementById("correo").focus();
      document.getElementById("errorCorreo").className = "red-text text-darken-3";
      document.getElementById("errorCorreo").innerHTML = "El formato de email es incorrecto";
      flagCorreo = false;
    } else {
        document.getElementById("errorCorreo").hidden = true;
        flagCorreo = true;
    }
    let flagCantidad = false;

    var valorCantidad = $("#Cantidad").val();
    if (valorCantidad == null || valorCantidad.length == 0 || !/^[0-9]+$/.test(valorCantidad)) {
        document.getElementById("errorCantidad").hidden = false;
        document.getElementById("Cantidad").ariaLabel = "El formato de cantidad es incorrecto, un ejemplo de sería 100";
        document.getElementById("Cantidad").focus();
        document.getElementById("errorCantidad").className = "red-text text-darken-3";
        document.getElementById("errorCantidad").innerHTML = "El formato de cantidad es incorrecto";
       flagCantidad =  false;
    } else {
        document.getElementById("errorCantidad").hidden = true;
        flagCantidad =  true;
    }
    

    AñadirTabla(flagCorreo, flagCantidad);
}

function AñadirTabla(flagCorreo, flagCantidad) {
    let flag = false;
    // Obtenemos los datos
    let correo = $('#correo').val();
    let nombre = $('#nombre').val();
    let antiguoExchange = $('#antiguo-exchange').val();
    let nombreMoneda = $('#Nombre-moneda').val();
    let cantidad = $('#Cantidad').val();
    if (flagCantidad && flagCorreo && nombre != '' && antiguoExchange != '' && nombreMoneda != '') {
        flag = true;
    }
    const objeto = {
        correo: `${correo}`,
        nombre: `${nombre}`,
        antiguoExchange: `${antiguoExchange}`,
        nombreMoneda: `${nombreMoneda}`,
        cantidad: `${cantidad}`,
    }
    if (flag) {
        $("#confirmed-transaction").empty()
        $("#confirmed-transaction").append("La transacción se ha completado con éxito.");
        let content = `
            <tr tabindex="0">
                <td>${objeto.nombreMoneda}</td>
                <td>${objeto.cantidad}</td>
                <td>${clasifyPrice(objeto.nombreMoneda)}</td>
            </tr>
        `;
        $("#tBody").append(content);
    } else {
        $("#confirmed-transaction").empty()
        $("#confirmed-transaction").append("Error, en la introducción de los datos");
    }
    return true;
}

$(document).ready(function () {
    $('ul.ventanas li a:first').addClass('activar');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.ventanas li a').click(function () {
        $('ul.ventanas li a').removeClass('activar');
        $(this).addClass('activar');
        $('.secciones article').hide()

        var activeTab = $(this).attr("href");
        $(activeTab).show();
        return false
    });
});


