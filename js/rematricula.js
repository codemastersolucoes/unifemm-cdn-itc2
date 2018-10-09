$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    console.log(lblCourse);
    let course = $('.dxeBase.EduTexto').text();
    console.log(course);
});