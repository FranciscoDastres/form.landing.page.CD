// document.getElementById('tipoProyecto').addEventListener('change', (event) => {
//   const especificarOtra = document.getElementById('especificarOtra');
//   const otraEspecificarInput = document.getElementById('otraEspecificar');
  
//   if (event.target.value === 'otra') {
//     especificarOtra.style.display = 'block';
//     otraEspecificarInput.required = true; // Hacer el campo obligatorio
//   } else {
//     especificarOtra.style.display = 'none';
//     otraEspecificarInput.required = false; // Quitar la obligatoriedad si no está seleccionado
//     otraEspecificarInput.value = ''; // Limpiar el campo si se oculta
//   }
// });

function handleSelectChange(selectId, specifyDivId, otherInputId) {
  const selectElement = document.getElementById(selectId);
  const specifyDiv = document.getElementById(specifyDivId);
  const otherInput = document.getElementById(otherInputId);
  
  selectElement.addEventListener('change', (event) => {
    if (event.target.value === 'otra') {
      specifyDiv.style.display = 'block';
      otherInput.required = true;
    } else {
      specifyDiv.style.display = 'none';
      otherInput.required = false;
      otherInput.value = '';
    }
  });
}

// Aplicar la misma lógica para ambos selectores
handleSelectChange('tipoProyecto', 'projectSpecify', 'projectOther');
handleSelectChange('howFindUs', 'findUsSpecify', 'findUsOther');
