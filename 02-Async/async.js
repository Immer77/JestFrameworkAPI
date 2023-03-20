const fetch = require('node-fetch');
const url = "https://jsonplaceholder.typicode.com/todos/1";


async function get(url){
    let data = await fetch(url);
    if(data.status !== 200){
        throw new Error("Bad Url");
    }
    return data.json();
}

async function main(id){

    try {
        let result = await get(url + id);
        return result;
    } catch (error) {
        console.error(error);
    }
}

main(2);

module.exports = main;

