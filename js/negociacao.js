$(document).ready(function () {
    if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
        // let $rowsDebits = $('.dxgvDataRow_Edu');
        // let $columnDue = $($rowsDebits).find('td');
        $('tr.dxgvDataRow_Edu').each(function(){
            let $columnDue = $(this).find('td:last');
            console.log($columnDue.text());
        });

    }
});

let searchParams = function ($key, $value) {
    let params = new URLSearchParams(window.location.search);

    if (params.has($key)) {
        let param = params.get($key);

        if (param === $value) {
            return param;
        }

        return null;
    }
};