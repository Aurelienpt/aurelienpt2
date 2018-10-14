// Nuf ne m'a pas aidé wallah 

const url = "https://www.reddit.com/r/me_irl/hot.json?limit=1";
const contenu = document.getElementById("meme");

fetch(url).then(response => {
    response.json().then(data => {
        // console.log(data);
        const meme = data.data.children[1].data.url;
        console.log(meme);
        console.dir(contenu);
        contenu.src = meme;
    })
})
