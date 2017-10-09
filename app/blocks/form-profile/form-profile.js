$(function () {
    $('[data-toggle="tooltip"]').tooltip({'container': 'body'});

    $('.select').select2({
        minimumResultsForSearch: Infinity
    });
})
