$(document).ready(function () {
  $('#form-tarefa').on('submit', function (e) {
    e.preventDefault(); // impede o recarregamento da página

    const nomeTarefa = $('#tarefa').val().trim();

    if (nomeTarefa !== '') {
      $('#lista').append('<li>' + nomeTarefa + '</li>');
      $('#tarefa').val('');
    }
  });

  $('#lista').on('click', 'li', function () {
    $(this).toggleClass('completed');
  });
});
