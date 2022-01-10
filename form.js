const createForm = (parentEl, fields) => {
  const form = addNode(parentEl, 'form');
  form.style.display = 'grid';
  form.style.gap = '15px';
  form.style.maxWidth = '40%';

  fields.forEach(({ labelTitle, id, type, name }) => {
    const label = addNode(form, 'label', labelTitle);
    const input = addNode(label, 'input');
    input.id = id;
    input.type = type;
    input.name = name;
    label.setAttribute('for', id);
  });

  const submitBtn = addNode(form, 'button', 'Submit');
  submitBtn.type = 'submit';
};
