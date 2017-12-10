var xbtc = new XMLHttpRequest();
xbtc.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
xbtc.onreadystatechange = function(){
    if(xbtc.readyState == 4){
        var res = JSON.parse(xbtc.responseText);
        var price = res.bpi.USD.rate;
        document.getElementById('btc').innerHTML = "$" + price;
    }
};
xbtc.send();