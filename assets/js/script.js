handleSelectChange = (selectId, specifyDivId, otherInputId) => {
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
handleSelectChange('tipoProyecto', 'projectSpecify', 'projectOther');
handleSelectChange('howFindUs', 'findUsSpecify', 'findUsOther');
