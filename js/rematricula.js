$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    let course = $(lblCourse).find('span:eq(1)').text();

    if ((course === 'Ensino Fundamental') || (course === 'Ensino Médio')) {
        // $('#ctl23_xbtConfirmar').on('click', function () {
        //     alert('click');
        //
        //     $('#EduMatriculaMainTable').empty().html('');
        // });3

        $('#ctl23_xpcPopUp_PW0').isvisible(function() {
            alert("do something");
        });
    }
});