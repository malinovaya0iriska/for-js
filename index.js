const URL = 'https://jsonplaceholder.typicode.com/comments';

const countUniqueLetters = (string) => {
  const set = new Set(string.replace(/\s+/g, '').split(''));
  return set.size;
};

const countUnrepeatedLetters = (string) => {
  const lettersArr = string.replace(/\s+/g, '').split('');
  const frequencyOfLetterOccurrence = 1;

  const occurrenceOfLettersList = lettersArr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {}
  );
  const uniqueLetters = Object.keys(occurrenceOfLettersList);

  return uniqueLetters.filter(key => occurrenceOfLettersList[key] === frequencyOfLetterOccurrence).length
};

const generateTableHead = (table, data) => {
  const thead = table.createTHead();
  const thRow = thead.insertRow();

  data.forEach(string => {
      const cell = document.createElement('th');
      cell.textContent = string;

      thRow.appendChild(cell);
    }
  )
};

const createCell = (el, data) => {
  const cell = el.insertCell();
  cell.textContent = data;

  el.appendChild(cell);
};

const generateTableBody = (tbody, data) => {

  data.forEach(({id, name, email, body}) => {
    const row = tbody.insertRow();

    const rowCellsValues = Object.values({
      id,
      name,
      email
    }).concat(countUniqueLetters(body), countUnrepeatedLetters(body));

    rowCellsValues.forEach(value => createCell(row, value));
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





