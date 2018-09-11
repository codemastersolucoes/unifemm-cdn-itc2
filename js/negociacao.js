$(document).ready(function () {
    if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
        $('tr.dxgvDataRow_Edu').each(function(){
            let $columnDue = $(this).find('td:last');
            let $dateSplited = splitDate($columnDue.text(), "/");
            let $newDate = createDate($dateSplited[2], $dateSplited[1], $dateSplited[2]);
            let $dateNow = new Date();
            $dateNow = createDate($dateNow.getFullYear(), $dateNow.getMonth(), $dateNow.getDay());
            let $difDaysDates = $newDate - $dateNow;

            console.log($columnDue.text());
            console.log($dateSplited);
            console.log($newDate);
            console.log($dateNow);
            console.log($difDaysDates);

            var date1 = new Date("7/13/2010");
            var date2 = new Date("12/15/2010");
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // if (()
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