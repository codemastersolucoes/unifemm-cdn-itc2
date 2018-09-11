$(document).ready(function () {
    if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
        $('tr.dxgvDataRow_Edu').each(function(){
            let $columnDue = $(this).find('td:last');
            console.log($columnDue.text());
            console.log(splitDate($columnDue.text()));
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

let splitDate = function ($date, $separator) {
    return $date.split($separator);
};

let createDate = function ($year, $month, $day) {
    return new Date($year, $month, $day);
};