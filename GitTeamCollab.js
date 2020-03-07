document.body.style.height = '100vh';

document.addEventListener('click', function(event){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200) {
        var quoteJson = JSON.parse(ajax.responseText);
        document.body.innerHTML += "<h1>" + quoteJson.quote + "</h1>"
    }
}
    ajax.open('GET', 'https://the-one-api.herokuapp.com/', true);
    ajax.send();    

    {
        id:"5cf5805fb53e011a64671582",
        name:"The Fellowship Of The Ring"
        }

});

