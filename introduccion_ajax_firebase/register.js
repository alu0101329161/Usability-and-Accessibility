import {saveUserData, getUsers, onGetUsers} from './firebase.js';



document.addEventListener('DOMContentLoaded', async function() {
  // Se espera el submit del formulario para actualizar la database
  $("#registro").submit(function() {
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
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
    });
  });

});
