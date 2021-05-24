let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://thatsthespir.it/api', true)
xhr.onload = function(){
    if (this.status === 200){
    let data = JSON.parse(this.responseText);
    document.getElementsByTagName('img')[0].setAttribute("src", data.photo);
    document.getElementsByTagName('img')[0].setAttribute("width", '300px');
    document.getElementById('author').innerHTML = '<b>' + data.author + '</b>'; 
    document.getElementById('quotes').innerHTML = data.quote;
    }
}

xhr.send();