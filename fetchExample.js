async function getUsers(){
    // AWAIT RESPONSE OF THE FETCH CALL
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');

    // ONLY PROCEED WHEN THE PREVIOUS IS RESOLVED
    const data = await response.json();

    // OMLY PROCEED ONCE THE SECOND PROMISE IS COMPLETED
    return data;
}

getUsers().then(users => console.log(users));