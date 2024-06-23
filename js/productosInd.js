document.addEventListener("DOMContentLoaded",() => {
    fetch("../assets/productosInd.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("container-IND");

            data.productos.forEach(producto => {

                const descProducto = document.createElement("div");
                descProducto.className = "boxDescProductoHyO";
                const imgProducto = document.createElement("img");
                imgProducto.src = producto.imagen;
                imgProducto.alt = producto.nombre;
                const nombreProducto = document.createElement("h6")
                nombreProducto.textContent = producto.nombre;
                const ul = document.createElement("ul");
                producto.descripcion.forEach(desc => {
                    const li  = document.createElement("li");
                    li.textContent = desc;
                    ul.appendChild(li);
                });
                const ubi = document.createElement("p");
                ubi.innerHTML =`${producto.aviso}`;

                descProducto.appendChild(imgProducto);
                descProducto.appendChild(nombreProducto);
                descProducto.appendChild(ul);
                descProducto.appendChild(ubi);
                container.appendChild(descProducto);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));

});