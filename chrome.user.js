
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var y = 0, message = '';
while( y < 2 ) { 
    console.log( y );
    sleep(5000);
    $x("//*[@id=\"reporting-app-header\"]/md-toolbar/div/product-tools-header/div/reporting-product-tools-header/refresh-button/button")[y].click();
    y = y + 1;
    message = 'y is ' + y;
}
