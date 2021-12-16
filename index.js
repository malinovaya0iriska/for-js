const URL = 'https://jsonplaceholder.typicode.com/comments'
const dataTHead = ['id', 'name', 'email', 'letters amount', 'unique letters']

const root = document.querySelector('#root');
const table = document.createElement('table');
const tBody = document.createElement('tbody');

const body = table.appendChild(tBody);
root.appendChild(table);

const countUniqueLetters = (string) => {
  const set = new Set(string.replace(/\s+/g, '').split(''));
  return set.size;
}

const countUnrepeatedLetters = (string) => {
  const lettersArr = string.replace(/\s+/g, '').split('');
  const set = new Set(string.replace(/\s+/g, '').split(''));
  let count = 0;

  set.forEach(el => {
    lettersArr.filter(letter => letter === el).length === 1 && ++count
  });
  return count;
}

const generateTableHead = (table, data) => {
  const thead = table.createTHead();
  const thRow = thead.insertRow();

  data.forEach(el => {
      const cell = document.createElement('th');
      const text = document.createTextNode(el);

      cell.appendChild(text);
      thRow.appendChild(cell);
    }
  )
}

const generateTableBody = (tbody, data) => {
  data.forEach(({id, name, email, body}) => {
    const row = tbody.insertRow();

    const cellId = row.insertCell();
    const textId = document.createTextNode(id);

    const cellName = row.insertCell();
    const textName = document.createTextNode(name);

    const cellEmail = row.insertCell();
    const textEmail = document.createTextNode(email);

    const cellAmount = row.insertCell();
    const textAmount = document.createTextNode(`${countUniqueLetters(body)}`);

    const cellUnique = row.insertCell();
    const textUnique = document.createTextNode(`${countUnrepeatedLetters(body)}`);

    cellId.appendChild(textId);
    cellName.appendChild(textName);
    cellEmail.appendChild(textEmail);
    cellAmount.appendChild(textAmount);
    cellUnique.appendChild(textUnique);
  })
}
const fillTableData = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(json => generateTableBody(body, json));
};


generateTableHead(table, dataTHead);
fillTableData(URL);





