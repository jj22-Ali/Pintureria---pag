document.addEventListener("DOMContentLoaded",() => {
    fetch("../assets/patalogias.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("container-Patologias");

            data.patologias.forEach(patologia => {

                const col = document.createElement("div");
                col.className = "col-12 col-md-4 d-flex justify-content-center my-2";
                const descPatologia = document.createElement("div");
                descPatologia.className = "boxDescPatologias";
                const imgPatologia = document.createElement("img");
                imgPatologia.src = patologia.imagen;
                imgPatologia.alt = patologia.nombre;
                const nombrePatologia = document.createElement("h6")
                nombrePatologia.textContent = patologia.nombre;
                const infoPatologia = document.createElement("button");
                infoPatologia.innerHTML =`${patologia.informacion}`;

                descPatologia.appendChild(imgPatologia);
                descPatologia.appendChild(nombrePatologia);
                descPatologia.appendChild(infoPatologia);
                col.appendChild(descPatologia);
                container.appendChild(col);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

});