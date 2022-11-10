window.addEventListener('onload', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();

    console.log(text);

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['message']);
    //.then(text ==> text=.text());
    // .then(y => myDisplay(y));
    // console.log(text['message']);

    displayQuote(json_response['message']);
}

function displayQuote(x) {
    // const qouteBox = document.querySelector('#js-quote-text');
    // //console.log('display quote working');
    // const textMessage = document.createTextNode(x);

    // qouteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;

}

getQuote();

