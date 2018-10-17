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
            const span2 = document.createElement('span');
            const name = container.childNodes[1].innerText;
            let status;

            if (container.childNodes[3]) {
                status = container.childNodes[3].innerText;
            }
            // console.log(name);
            // console.log(status);

            if(typeof name === "undefined" || name === "" || typeof status === "undefined" ||status === "") {

                continue;

            } else {

            span.innerHTML = "<strong>" + name + "</strong>" + " ";
            print.append(span);
            span2.innerHTML = status + "<br/><hr/>"
            span2.classList.add("temps-attraction");
            print.append(span2);
            }

            console.log("sauté");

        }
        div.innerHTML = "";
    })
});