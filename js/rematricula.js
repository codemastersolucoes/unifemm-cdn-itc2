$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    let course = $(lblCourse).find('span:eq(1)').text();

    if ((course === 'Ensino Fundamental') || (course === 'Ensino Médio')) {
        $('#gpAltPlano').parent().hide();
    }

    $('#ctl23_xpcPopUp_PW0').on('show', function () {
        alert('teste');
    });
});