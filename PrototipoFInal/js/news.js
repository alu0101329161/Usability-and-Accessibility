
$(document).ready(function () {
  $('#date-from').datepicker({
    format: 'dd/mm/yyyy',
    firstDay: 1,
    minDate: new Date(2018, 1, 1),
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

  $('#date-to').datepicker({
    format: 'dd/mm/yyyy',
    firstDay: 1,
    defaultDate: new Date(),
    minDate: new Date(2018, 1, 1),
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

  $('input#input_title, input#input_description').characterCounter();

  $('#nft-check').change(function () {
    const isChecked = $('#nft-check').is(':checked');
    if (isChecked) {
      $('#nft-check').attr('aria-checked', 'true');
    } else {
      $('#nft-check').attr('aria-checked', 'false');
    }
  });

  $('#coin-check').change(function () {
    const isChecked = $('#coin-check').is(':checked');
    if (isChecked) {
      $('#coin-check').attr('aria-checked', 'true');
    } else {
      $('#coin-check').attr('aria-checked', 'false');
    }
  });

  $('#game-check').change(function () {
    const isChecked = $('#game-check').is(':checked');
    if (isChecked) {
      $('#game-check').attr('aria-checked', 'true');
    } else {
      $('#game-check').attr('aria-checked', 'false');
    }
  });

  $('#social-check').change(function () {
    const isChecked = $('#social-check').is(':checked');
    if (isChecked) {
      $('#social-check').attr('aria-checked', 'true');
    } else {
      $('#social-check').attr('aria-checked', 'false');
    }
  });
});