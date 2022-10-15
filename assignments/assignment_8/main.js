const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was a snow day, so :insertX: went to Chautauqua. When he got to :insertY:. Then, after a long day in the snow he :insertZ:."
const insertX = ["Big Chungus","Drity Mike","Micheal"]
const insertY = ["Biuld a snowman","Started a snowball fight","Setup a hot cocoa stand"]
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {
    let newStory =storyText;
    const xItem = randomValueFromArray(insertX)
    const yItem = randomValueFromArray(insertY)
    const zItem = randomValueFromArray(insertZ)

    newStory = newStory.replaceAll(':insertX:',xItem);
    newStory = newStory.replaceAll(':insertY:',yItem);
    newStory = newStory.replaceAll(':insertZ:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}







