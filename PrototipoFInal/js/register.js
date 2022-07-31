import { saveUserData, onGetUsers } from './firebase.js';

document.addEventListener('DOMContentLoaded', async function () {
  // Se espera el submit del formulario para actualizar la database
  $("#registro").submit(function () {
    var name = $('#nombres').val();
    var surname = $('#apellidos').val();
    var year = $('#fecha_nacimiento').val();
    var location = $('#lugar_nacimiento').val();
    var email = $('#correo').val();
    saveUserData(name, surname, email, year, location);
  });

  const userTable = $("#User-table")[0];

  // Muestra los usuarios registrados
  onGetUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      const newRowAmount = userTable.insertRow();
      newRowAmount.innerHTML = `
        <td class="register-td">${user.name}</td>
        <td class="register-td">${user.email}</td>
      `;
    });
  });

  // Datepicker para seleccionar fecha de nacimiento
  $('#fecha_nacimiento').datepicker({
    format: 'dd/mm/yyyy',
    firstDay: 1,
    defaultDate: new Date(2004, 1, 1),
    yearRange: 100,
    maxDate: new Date(),
    i18n: {
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      weekdaysAbbrev: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      cancel: 'Atrás',
    },
  });
});