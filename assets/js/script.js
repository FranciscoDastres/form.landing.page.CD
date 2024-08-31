handleSelectChange = (selectId, specifyDivId, otherInputId) => {
  const selectElement = document.getElementById(selectId);
  const specifyDiv = document.getElementById(specifyDivId);
  const otherInput = document.getElementById(otherInputId);

  selectElement.addEventListener('change', (event) => {
    if (event.target.value === 'otra') {
      specifyDiv.style.display = '';
      otherInput.required = true;
    } else {
      specifyDiv.style.display = 'none';
      otherInput.required = false;
      otherInput.value = '';
    }
  });
}
handleSelectChange('tipoProyecto', 'projectSpecify', 'projectOther');
handleSelectChange('howFindUs', 'findUsSpecify', 'findUsOther');


document.getElementById('contactForm').addEventListener('submit',  (event) =>{
  event.preventDefault(); // Previene el envío normal del formulario
  $('#contactModal').modal('show'); // Muestra el modal

  // Reinicia el formulario
  document.getElementById('contactForm').reset();

  // Opcional: Ocultar campos adicionales si es necesario
  document.getElementById('projectSpecify').style.display = 'none';
  document.getElementById('findUsSpecify').style.display = 'none';
});