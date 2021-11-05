let loginButton = document.querySelector('button');
console.log('button');

loginButton.onclick = function (e) {
    let kanyeURL = "https://api.kanye.rest/";
    fetch (kanyeURL)
        .then(function(response) {
            if (response.status === 200) {
                console.log("kanye is alive");
                return response.json();
            } else {
                console.log("kanye is unfortunately not alive");
            }
        })
        .then(function(data) {
            console.log(data);
            console.log(data.quote);

            let quoteBox = document.querySelector('h3');
            quoteBox.textContent = data.quote;
        })
        e.preventDefault();
}