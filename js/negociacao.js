$(document).ready(function () {
    if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
        $('tr.dxgvDataRow_Edu').each(function(){
            let $columnDue = $(this).find('td:last');
            let $dateSplited = splitDate($columnDue.text(), "/");
            let $newDate = createDate($dateSplited[2], $dateSplited[1], $dateSplited[2]);
            let $dateNow = new Date();

            console.log($columnDue.text());
            console.log($dateSplited);
            console.log($newDate);
            console.log($dateNow);
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