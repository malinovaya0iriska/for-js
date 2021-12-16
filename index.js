const URL = 'https://jsonplaceholder.typicode.com/comments';

const countUniqueLetters = (string) => {
  const set = new Set(string.replace(/\s+/g, '').split(''));
  return set.size;
};

const countUnrepeatedLetters = (string) => {
  const lettersArr = string.replace(/\s+/g, '').split('');
  const set = new Set(string.replace(/\s+/g, '').split(''));
  let count = 0;

  set.forEach(el => {
    lettersArr.filter(letter => letter === el).length === 1 && ++count
  });
  return count;
};

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
};

const createCell = (element, data) => {
  const cell = element.insertCell();
  const text = document.createTextNode(data);

  cell.appendChild(text);
};

const generateTableBody = (tbody, data) => {

  data.forEach(({id, name, email, body}) => {
    const row = tbody.insertRow();

    const rowCellsValues = Object.values({
      id,
      name,
      email
    }).concat(countUniqueLetters(body), countUnrepeatedLetters(body))

    rowCellsValues.forEach(item => createCell(row, item))
  })
};

const fillTableData = (url, body) => {
  fetch(url)
    .then(response => response.json())
    .then(json => generateTableBody(body, json));
};

const createTable = (dataTHead) => {

  const root = document.querySelector('#root');
  const table = document.createElement('table');
  const tBody = document.createElement('tbody');

  const body = table.appendChild(tBody);

  root.appendChild(table);

  fillTableData(URL, body);
  generateTableHead(table, dataTHead);
};

createTable(['id', 'name', 'email', 'letters amount', 'unique letters']);





