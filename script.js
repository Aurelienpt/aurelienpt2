const colors = ["#FF0000", "#E2571E", "#FF7F00", "#FFFF00", "#00FF00", "#96bf33", "#0000FF", "#4B0082", "#8B00FF", "#ffffff"];
const disparitus = document.getElementById("remove-like");
console.log(disparitus)

document.getElementById("title").addEventListener("click", () => rainbow("title"));

function rainbow(id) {
    let i = 0

    const setColor = i => {
        document.getElementById(id).style.color = colors[i];
        if (i > colors.length - 1) {
            i = 0;
        } else {
            i++;
        }
        setTimeout(() => setColor(i), 250);
    }

    setColor(i);

}

function hasClicked() {

    const resp = "<p style='color: gray; font-style: italic;'>Votre avis a été pris en compte.</p>"
    disparitus.innerHTML = resp;
}

// On va choper le best content