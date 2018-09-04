$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('SelectedMenuIDKey')) {
        let param = searchParams.get('SelectedMenuIDKey');

        if (param === 'mnNegociacao') {
            let $rowsDebits = $('.dxgvDataRow_Edu');
            console.log($rowsDebits);
        }
    }
});