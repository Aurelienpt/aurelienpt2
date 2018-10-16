const lien = "https://cors-anywhere.herokuapp.com/https://queue-times.com/fr/parks/4/queue_times"



fetch(lien).then(response => {
    response.text().then(data => {
        const div = document.getElementById("list-time");
        div.innerHTML = data;

        const containers = document.getElementsByClassName("panel-title");
        // console.log(containers.length)



        for (let i = 0; i < containers.length; i++) {
            const container = containers[i];
            const name = container.childNodes[1].innerHTML;
            let status;

            if (container.childNodes[3]) {
                status = container.childNodes[3].innerHTML
            }
            console.log(name,status)
        }












        // const timeData = containers.map(container => {

        //     const nameContainer = container.getElementsByName("a")[0];
        //     console.log(container);
        //     console.log(nameContainer.innerHTML);

        //     return {
        //         "name": "",
        //         "waitTime": "",
        //     }

        // }); 

    })
});