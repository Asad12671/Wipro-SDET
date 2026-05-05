fetch("https://randomuser.me/api/?results=5")
  .then((res) => res.json())
  .then((data) => {
    const users = data.results;

    const unique = [
      ...new Map(users.map((user) => [user.email, user])).values(),
    ];

    console.log(unique);
  })
  .catch((err) => console.log(err));
