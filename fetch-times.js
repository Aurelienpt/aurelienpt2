const lien = "https://cors-anywhere.herokuapp.com/https://queue-times.com/fr/parks/4/queue_times"



fetch(lien).then(response => {
    response.text().then(data => {
        const div = document.getElementById("load-time");
        const print = document.getElementById("list-time");
        div.innerHTML = data;
        const containers = document.getElementsByClassName("panel-title");
        // console.log(containers.length)



        for (let i = 0; i < containers.length; i++) {
            const container = containers[i];
            const span = document.createElement('span');
            const name = container.childNodes[1].innerHTML;
            let status;

            if (container.childNodes[3]) {
                status = container.childNodes[3].innerHTML;
            }
            console.log(name, status);
            span.innerHTML = name + " " + status;
            print.append(span);
        }
        div.innerHTML = ""
    })
});