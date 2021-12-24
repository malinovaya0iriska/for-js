const countUniqueLetters = string => {
  const set = new Set(string.replace(/\s+/g, '').split(''));
  return set.size;
};

const countUnrepeatedLetters = string => {
  const lettersArr = string.replace(/\s+/g, '').split('');
  const frequencyOfLetterOccurrence = 1;

  const occurrenceOfLettersList = lettersArr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const uniqueLetters = Object.keys(occurrenceOfLettersList);

  return uniqueLetters.filter(
    key => occurrenceOfLettersList[key] === frequencyOfLetterOccurrence,
  ).length;
};

const addNode = (parentEl, childEl, content = null) => {
  const newTag = document.createElement(childEl);
  if (content) {
    newTag.textContent = content;
  }

  parentEl.appendChild(newTag);
  return newTag;
};

const getTableData = url => {
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
};

const generateTableHead = (table, data) => {
  const thead = table.createTHead();
  const thRow = thead.insertRow();

  data.forEach(title => addNode(thRow, 'th', title));
};

const generateTableBody = (tbody, data) => {
  data.forEach(({id, name, email, body}) => {
    const row = tbody.insertRow();

    const rowCellsValues = Object.values({
      id,
      name,
      email,
    }).concat(countUniqueLetters(body), countUnrepeatedLetters(body));

    rowCellsValues.forEach(item => addNode(row, 'td', item));
  });
};

const fillTableData = async body => {
  const loader = addNode(body, 'tr', 'Loading...');
  const data = await getTableData(URL);
  data.length = 15;
  loader.remove();
  generateTableBody(body, data);
};

const createTable = (parentEl, dataTHead) => {
  const table = addNode(parentEl, 'table');
  const tBody = addNode(table, 'tbody');

  generateTableHead(table, dataTHead);
  fillTableData(tBody);
};
