fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    const unique = [...new Map(data.map((d) => [d.title, d])).values()];
    console.log(unique);
  })
  .catch((err) => console.log(err));
