const URL = 'https://jsonplaceholder.typicode.com/users';

export default function GetProductDetailFromApi(id) {
    fetch(URL + id)
        .then(res => res.json())
        .then(res => console.log(res))
};

