const createForm = (parentEl, fields) => {
  const form = addNode(parentEl, 'form');

  form.style.display = 'grid';
  form.style.gap = '15px';
  form.style.maxWidth = '40%';

  fields.forEach(({labelTitle, id, type}) => {
    const label = addNode(form, 'label', labelTitle);
    const input = addNode(label, 'input');
    input.id = id;
    input.type = type;
    label.setAttribute('for', id);
  })

  const submitBtn = addNode(form, 'button', 'Submit');
  submitBtn.type = 'submit';
}



