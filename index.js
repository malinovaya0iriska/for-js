const dataFull = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
];
const URL = 'https://jsonplaceholder.typicode.com/comments';
const URLFormSubmit = 'https://cors-anywhere.herokuapp.com/postman-echo.com/post';
const tableHeadings = ['id', 'name', 'email', 'letters amount', 'unique letters'];

const root = document.querySelector('#root');

const inputFields = [
  { labelTitle: 'Name', id: 'input-name', type: 'text', name: 'name' },
  { labelTitle: 'Email', id: 'input-email', type: 'email', name: 'email' },
  { labelTitle: 'Password', id: 'input-password', type: 'password', name: 'password' },
];

createTable(root, tableHeadings);
createForm(root, inputFields);

const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  try {
    const response = await fetch(URLFormSubmit, {
      method: 'POST',
      body: new FormData(form),
    });

    const data = await response.json();

    console.log(data.form);
  } catch (error) {
    console.log('error', error);
  }
  form.reset();
});
