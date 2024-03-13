$(document).ready(function() {
    $('#adicionar-tarefa').on('click', function(e) {
        e.preventDefault();
        var novaTarefa = $('#nova-tarefa').val().trim();
        if (novaTarefa !== '') {
            $('#tarefas').append('<li>' + novaTarefa + '</li>');
            $('#nova-tarefa').val('');
        }
    });

    $('#tarefas').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});