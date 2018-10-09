$(document).ready(function () {
    let lblCourse = $('.EduLabel:contains("Curso:")').parent();
    console.log(lblCourse);
    let course = $(lblCourse).find('span:eq(1)');
    console.log(course);
});