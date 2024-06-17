const gridFooter = [
    {id: "elemento2", items: ["Centro de contactos", "Tiendas Cercanas"]},
    {id: "elemento3", items: ["Linea Hogar y Obra", "Linea Industial"]},
    {id: "elemento4", items: ["Color", "Patologias"]},
];

gridFooter.forEach(elemento => {
    const container = document.getElementById(elemento.id);
    const ul = document.createElement("ul");
    elemento.items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
    });
    container.appendChild(ul)
});