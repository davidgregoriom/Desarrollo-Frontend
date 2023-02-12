let page=1;
let name;
function fetchChars(page,name){
    if(name){
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
        .then(data => data.json())
        .then(chars => {
        var container = document.getElementById("results");
        container.innerHTML = "";
        let info = chars.results;
        console.log(chars, "\n")
        for (var char of chars.results) {
            const caracter = document.createElement("div");

            const name = document.createElement("p");
            let pTexto = document.createTextNode((char.name));
            name.appendChild(pTexto);

            const img = document.createElement("img");
            img.src = (char.image);

            caracter.appendChild(img);
            caracter.appendChild(name);

            container.appendChild(caracter);
            console.log(caracter);
        }
        }).catch(function(error){
            console.log(error);
        })
    }else{
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(data => data.json())
        .then(chars => {
            var container = document.getElementById("results");
            container.innerHTML = "";
            let info = chars.results;
            console.log(chars, "\n")
            for (var char of chars.results) {
                const caracter = document.createElement("div");

                const name = document.createElement("p");
                let pTexto = document.createTextNode((char.name));
                name.appendChild(pTexto); 

                const img = document.createElement("img");
                img.src = (char.image);

                caracter.appendChild(img);
                caracter.appendChild(name);

                container.appendChild(caracter);

            }
        }).catch(function(error){
            console.log(error);
        })
    }
}
fetchChars(1);

function getPagina(){
    page=parseInt(document.getElementById("page").value);
    if(page<=1 &&page >=41){
        window.alert("Error de pagina");
    }else{
        
        fetchChars(page);
    }
}

function getPersonaje(){
    name=document.getElementById("name").value;
    page=1;
    fetchChars(page,name);
}

function back(){
    if(name===""){
        if(page<1){
            window.alert("Error de pagina");
        }else{
            page=page-1;
            fetchChars(page);
        }
    }else{
        if(page<1){
            window.alert("Error de pagina");
        }else{
            page=page-1;
            fetchChars(page,name);
        }
    }

}

function next(){
    if(name===""){
        if(page>41){
            window.alert("Error de pagina");
        }else{
            page=page+1;
            fetchChars(page);
        }
    }else{
        //let paginasiguiente=fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
        if(page>41){
            window.alert("Error de pagina");
        }else{
            page=page+1;
            fetchChars(page,name);
        }
    }
}