const createLoading = (element) => {
  const loading = document.createElement('div');
  loading.classList.add('loading');

  const img = document.createElement('img');

  loading.style.display = 'flex';
  loading.style.justifyContent = 'center';

  img.src = 'https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340';

  loading.appendChild(img);
  element.appendChild(loading);
};

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
      ? document.querySelector(elementOrSelector)
      : elementOrSelector
  ).style.display = visible ? 'auto' : 'none';



