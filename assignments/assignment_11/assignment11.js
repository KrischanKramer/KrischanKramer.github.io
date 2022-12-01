const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.imgflip.com/get_memes';

async function getQuote() {
    let text = await fetch(endpoint)
    let response = await text.text();


    let json_response = JSON.parse(response);

    console.log(json_response);

    let meme = getRandomInt(0,99);

    let json_url = json_response.data.memes[meme].url;

    move(json_url);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

function displayQuote(url) {
    let image = document.getElementById("image");
 
        image.src = url;
}

var i = 0;
function move(link) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        displayQuote(link);
    } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

getQuote();
Footer
