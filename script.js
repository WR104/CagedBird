const form = document.querySelector('form');

function radomYoutube() {
    try {
        fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&origin=*&rnnamespace=0&rnlimit=1')
            .then((response) => response.json())
            .then(text => {
                console.log(text.query.random[0].title)
                const randomTerm = text.query.random[0].title.split(' ');
                const q = randomTerm.join('+');
                const youtubeUrl = 'https://www.youtube.com/results?search_query=' + q;
                window.open(youtubeUrl)
            })
    } catch (e) {
        console.log("error")
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const index = getRandomInt(3);
    if (index == 0)
        window.open("https://wikipedia.org/wiki/Special:Random")
    else if (index == 1)
        window.open("https://www.reddit.com/r/random")
    else if (index == 2)
        radomYoutube();
});


const faceButton = document.querySelector('.face-button');
const faceContainer = document.querySelector('.face-container');
const containerCoords = document.querySelector('#container');
const mouseCoords = containerCoords.getBoundingClientRect();

faceButton.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(faceButton, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
     ease: Power4.easeOut
   })
});

faceButton.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  TweenMax.to(faceContainer, 0.3, {
     x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 25,
     y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 25,
     ease: Power4.easeOut
   })
});

faceButton.addEventListener('mouseenter', function(e) {
  TweenMax.to(faceButton, 0.3, {
    scale: 0.975
  })
});

faceButton.addEventListener('mouseleave', function(e) {
  TweenMax.to(faceButton, 0.3, {
    x: 0,
    y: 0,
    scale: 1
  })
  
  TweenMax.to(faceContainer, 0.3, {
    x: 0,
    y: 0,
    scale: 1
  })
});
