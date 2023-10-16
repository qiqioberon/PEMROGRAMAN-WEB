$.ajax({
    url: 'http://apilayer.net/api/live',
    type: 'get',
    dataType: 'json',
    data: {
        'access_key':'a5398be57483c66ef6161ae5cf1f07e3',
        'format':1
    },
    success: function (result) {
        const rate=result.quotes;
            $.each(rate, function (i, t) {
                $('isi').append(
                `<div class="col-md-3">
                    <div class="card m-3"> 
                        <div class="card-body bg-success-subtle">
                            <div class="row">
                                <div class="col-2">
                                ${i}
                                </div>
                                <div class="col-9">
                                ${t}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);`)
            });
    }
})
