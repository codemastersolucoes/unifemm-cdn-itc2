$(document).ready(function () {
    if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
        $('tr.dxgvDataRow_Edu').each(function(){
            let $columnDue = $(this).find('td:last');
            let $dateSplit = splitDate($columnDue.text(), "/");
            let $newDate = createDate($dateSplit[2], parseInt($dateSplit[1])-1, $dateSplit[0]);
            let $dateNow = new Date();
            $dateNow = createDate($dateNow.getFullYear(), $dateNow.getMonth(), $dateNow.getDay());

            if ($dateNow > $newDate) {
                var timeDiff = Math.abs($newDate.getTime() - $dateNow.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                if ((diffDays < 30) || (diffDays > 59)) {
                    $(this).hide();
                }

                // console.log(diffDays);
            } else {
                $(this).hide();
            }
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