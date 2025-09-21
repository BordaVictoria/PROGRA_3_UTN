const miPromesa = new Promise((resolve, reject) => {
  var exito = false;

  if (exito) {
    resolve("La ejecución fue exitosa");
  } else {
    reject("Fue erronea");
  }
});

var users = [];

miPromesa
  .then((result) => {
    var exito = true;
    if (exito) {
      return "la repuesta fue " + result;
    } else {
      throw "Este es el mensaje de error";
    }
  })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    console.log("Dentro de la promesa");
    console.log(users);
  })
  .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "Mi titulo",
    body: "mi post",
    id: 1,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

// async/await

const getUsers = async () => {
  try {
    const userRaw = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await userRaw.json();
    const user1 = usersData[0];
    console.log(user1);
  } catch (error) {
    console.error(error);
  }
};

getUsers();