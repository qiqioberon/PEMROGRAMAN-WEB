$.ajax({
    url: 'http://api.apilayer.com/live', 
    dataType: 'json',
    type: 'get',
    data: {
      'access_key': 'a5398be57483c66ef6161ae5cf1f07e3',
      'format': 1,
      'source': 'EUR',
    },
    success: function(result) {
      console.log(result);
      if (result.success === true) {
        
      }
    },
    error: function(xhr, status, error) {
      console.log('Terjadi kesalahan: ' + error);
    }
  });
  
