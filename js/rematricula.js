$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    let course = $(lblCourse).find('span:eq(1)').text();

    if ((course === 'Ensino Fundamental') || (course === 'Ensino Médio')) {
        alert('click');
        $('#ctl23_xbtConfirmar').on('click', function () {
            $('#EduMatriculaMainTable').empty().html('');
        });
    }
});