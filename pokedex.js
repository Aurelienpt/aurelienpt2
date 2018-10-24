document.getElementById("submit").addEventListener("click", () => {
    const base_url = "https://cors-anywhere.herokuapp.com/https://pokeapi.co";
    
    const pokemonName = document.getElementById("pokemon_input").value;
    
    fetch(base_url + "/api/v2/pokemon/" + pokemonName).then(response => {
        response.json().then(data => {
            console.error(data);
        }).catch(err => {
            if(err) throw err;
        });
    }).catch(err => {
        if(err) throw err;
    });
});

//bulbasaur