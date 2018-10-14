// Token fetcher

const url = "https://distord.herokuapp.com/tokens"
const tokensContainer = document.getElementById("tokens");

fetch(url).then(response => {
    response.json().then(data => {
        const payload = data.payload;
        for (let i = 0; i < payload.length; i++) {
            const token = payload[i].token;
            const name = payload[i].bot_username;
            const span = document.createElement('span');
            const gras = document.createElement('span')
            const BoT = document.createElement('br');
            gras.style = "font-weight: bold;"
            gras.innerHTML = name;
            span.innerHTML = " : " + token;
            tokensContainer.append(gras)
            tokensContainer.append(span)
            tokensContainer.append(BoT)
        }
    })
})