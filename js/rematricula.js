$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    let course = $(lblCourse).find('span:eq(1)').text();

    if ((course === 'Ensino Fundamental') || (course === 'Ensino Médio')) {
        // $('#gpAltPlano').parent().hide();
    }

    console.log($('span:contains("Confirmar matrícula")'));

    $('#ctl23_xbtConfirmar_CD').on('click', function () {
        alert('teste');
    });
});