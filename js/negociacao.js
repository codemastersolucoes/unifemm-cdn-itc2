$(document).ready(function () {
        if (searchParams('SelectedMenuIDKey', 'mnNegociacao')) {
            let $rowsDebits = $('.dxgvDataRow_Edu');
            console.log($rowsDebits);
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