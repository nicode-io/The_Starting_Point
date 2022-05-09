/* Promise concept */
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('Promise Successful');
        }, 1000);
    } else {
        reject('Promise Failed');
    }
});

myPromise
    .then(value => value + '!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));


/* Fetch vs Async/Await */
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id,
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));

const myAsyncFunction = async () => {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        const secondUser = users[1];
        console.log(secondUser);
        const postsResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id,
        );
        const posts = await postsResponse.json();
        console.log(posts);
    } catch (e) {
        console.log(e);
    }
};

myAsyncFunction();
