const dataFull = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
]

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

const createCell = (element, data) => {
  const cell = element.insertCell();
  const text = document.createTextNode(data);

  cell.appendChild(text);
}

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
}

const createTable = (dataTHead, dataBody) => {

  const root = document.querySelector('#root');
  const table = document.createElement('table');
  const tBody = document.createElement('tbody');

  const body = table.appendChild(tBody);

  root.appendChild(table);

  generateTableBody(body, dataBody);
  generateTableHead(table, dataTHead);
}

createTable(['id', 'name', 'email', 'letters amount', 'unique letters'], dataFull)
