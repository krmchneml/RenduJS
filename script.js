fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
        const FirstSection = document.getElementById("first-container");
      
       




        //ici vous ecrivez votre code
        console.log(data);

    })
    .catch(error => console.error('Error:', error));