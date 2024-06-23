document.addEventListener('DOMContentLoaded', () => {
    fetch('../assets/colores.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('colores-container');
        
        data.colores.forEach(color => {
          const colorGroup = document.createElement('div');
          colorGroup.className = 'color-group';
          colorGroup.innerHTML = `<h5>${color.nombre}</h5>`;
          color.tonos.forEach(tono => {
            const colorBox = document.createElement('div');
            colorBox.className = 'colorBox';
            colorBox.style.backgroundColor = tono;
            colorBox.textContent = tono;
            colorGroup.appendChild(colorBox);
          });
          container.appendChild(colorGroup);
        });
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
  });