function refreshCases(){
    document.evaluate("//*[@id=\"reporting-app-header\"]/md-toolbar/div/product-tools-header/div/reporting-product-tools-header/refresh-button/button", document.body, null, 9, null). singleNodeValue.click(); 
    setTimeout(function(){
        refreshCases();
    },6000) 
}
refreshCases();
