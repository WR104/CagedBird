//https://cors-anywhere.herokuapp.com/
const form = document.querySelector('form');

function radomYoutube(){
    try{
        fetch('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=1')
        .then((response) => response.json())
        .then(text => {
            console.log(text.query.random[0].title)
            const randomTerm = text.query.random[0].title.split(' ');
            const q = randomTerm.join('+');
            const youtubeUrl = 'https://www.youtube.com/results?search_query=' + q;
            window.open(youtubeUrl)
        })
    } catch(e){
        console.log("error")
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    
    //window.open("https://wikipedia.org/wiki/Special:Random")
    //window.open("https://www.reddit.com/r/random")
    radomYoutube();
});
