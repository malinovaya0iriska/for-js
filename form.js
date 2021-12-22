const createForm = (parentEl, fields) => {
  const form = addNode(parentEl, 'form');
  form.style.display = 'grid';
  form.style.gap = '15px';
  form.style.maxWidth = '40%';

  fields.forEach((inputData) => {
    const label = addNode(form, 'label', inputData.label);
    const input = addNode(label, 'input');
    input.id = inputData.id;
    input.type = inputData.type;
    label.setAttribute('for', input.id);
  })

  const submitBtn = addNode(form, 'button', 'Submit');
  submitBtn.type= 'submit';
}