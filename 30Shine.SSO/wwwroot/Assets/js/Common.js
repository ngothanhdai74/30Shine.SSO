//===============================================
// function show message with type 1: info, 2: success, 3: warning, 4: error
function ShowMessage(_title, msg, type, timeout = 3000) {
    switch (type) {
        case 1:
            iziToast.info({
                timeout: timeout,
                title: _title,
                message: msg
            });
            break;
        case 2:
            iziToast.success({
                timeout: timeout,
                title: _title,
                message: msg
            });
            break;
        case 3:
            iziToast.warning({
                timeout: timeout,
                title: _title,
                message: msg
            });
            break;
        case 4:
            iziToast.error({
                timeout: timeout,
                title: _title,
                message: msg
            });
            break;
        default:
            break;
    }
}


function addCommas(nStr) {
    if (nStr === undefined || isNaN(nStr)) {
        return 0;
    }
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    
    return x1 + x2;
}

// Làm tròn số 
//. value: số
//. số sau dấu phẩy VD: 10.23
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function ShowModal() {
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    });
}
function AddNewLoading() {
    $(".add-loading").removeAttr("style");
}

function RemoveNewLoading() {
    $(".add-loading").css("display", "none");
}