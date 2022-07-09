const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => {
        console.log(`Opa, aconteceu um erro: \n${erro} `);
    })