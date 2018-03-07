

var term = "cat";
var begin =19900101;
var end =19910101;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+"&begin_date="+begin+"&end_date="+end+"&api-key=de931d249c5f450cabd3e4572453e68b";


$.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  });


 


