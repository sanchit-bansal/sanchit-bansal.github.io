var y = 0, message = '';
while( y < 10 ) { 
    console.log( y );
    $x("//*[@id=\"reporting-app-header\"]/md-toolbar/div/product-tools-header/div/reporting-product-tools-header/refresh-button/button")[y].click();
    y = y + 1;
    message = 'y is ' + y;
}