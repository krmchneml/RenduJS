fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {  // code starts here les amis (en dessous)
        let section1 = document.getElementById("first-container");
        let section2 = document.getElementById("realisations");
        let section3 = document.getElementById("temoignages");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let a = document.createElement("button");
        let servicecontainer = document.createElement("div");

        // création du h1
        h1.textContent = data.nomCommercial;
        section1.appendChild(h1);
        // création du h2
        h2.textContent = data.phraseAccroche;
        section1.appendChild(h2);
        // le a
        a.textContent = data.texteAppelAction;
        section1.appendChild(a);


        // le p tableau
        servicecontainer.setAttribute("class", "ohiocontainer");
        data.beneficesClients.forEach(element => {
            let p = document.createElement("p");
            p.textContent = element;

            section1.appendChild(servicecontainer);
            servicecontainer.appendChild(p);

        });

        data.realisations.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class", "divreal");
            let h2real = document.createElement("h2");
            h2real.setAttribute("class", "h2real");
            let p2real = document.createElement("p");
            p2real.setAttribute("class", "p2real");
            let imgreal = document.createElement("img");
            h2real.textContent = element.titre;
            p2real.textContent = element.description;
            imgreal.src = element["image-url"];
            section2.appendChild(div);
            div.appendChild(h2real);
            div.appendChild(p2real);
            div.appendChild(imgreal);
        });

        data.temoignages.forEach(element => {
            let divtem = document.createElement("div");
            divtem.setAttribute("class", "divtem");
            let h3 = document.createElement("h3");
            h3.setAttribute("id", "h3tem");

            let h4 = document.createElement("h4");
            h4.setAttribute("id", "h4tem");
            let p3tem = document.createElement("p");
            let h2tem = document.createElement("h2");
            h2tem.setAttribute("class", "h2tem");
            h3.textContent = element.prenom;
            h4.textContent = element.typePrestation;
            p3tem.textContent = element.commentaire;
            p3tem.setAttribute("id", "p3tem");
            h2tem.textContent = element.note;
            section3.appendChild(divtem);
            let star2 = document.createElement("div");
            star2.innerHTML=`<i class="fa-solid fa-star"></i>`;
            h2tem.appendChild(star2);
            divtem.appendChild(h3);
            divtem.appendChild(h4);
            divtem.appendChild(p3tem);
            divtem.appendChild(h2tem);
        });

    })
    .catch(error => console.error('Error:', error));