/*
    иконка-спиннер, которая крутится, пока загружается ваша страница
*/
$(window).on('load', function () {
    $("#loader-bg").fadeOut("200");
    buildPlot($('#reportid').val());
    // $("#loader").fadeOut("slow");
});

/* запрашивает записи отчета из БД и отрисовывает их в div report-plot */
function buildPlot(report_id) {
    var sid = $('#inputState').val();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/plot_data/'+report_id+'/'+sid+'/');
    xhr.onload = function () {
        var data = xhr.responseText;
        Plotly.newPlot('report-plot', JSON.parse(data)['data']);
        $('#report-statistic-label').text(JSON.parse(data)['text']);
    };
    xhr.send();
}