const dataFull = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus " +
      "dolor quam autem quasi reiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at" +
      "  voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium  " +
      "omnis quibusdam delectus saepe quia accusamus maiores nam est    cum et ducimus et vero voluptates excepturi deleniti ratione"
  },
]

const dataTHead = ['id', 'name', 'email']

const root = document.querySelector('#root');
const table = document.createElement('table');
const tBody = document.createElement('tbody');

const body = table.appendChild(tBody);
root.appendChild(table);


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
  data.forEach(({id, name, email}) => {
    const row = tbody.insertRow();

    const cellId = row.insertCell();
    const textId = document.createTextNode(id);

    const cellName = row.insertCell();
    const textName = document.createTextNode(name);

    const cellEmail = row.insertCell();
    const textEmail = document.createTextNode(email);

    cellId.appendChild(textId);
    cellName.appendChild(textName);
    cellEmail.appendChild(textEmail);
  })
}

generateTableBody(body, dataFull);
generateTableHead(table, dataTHead);