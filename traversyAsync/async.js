////////////////////////////////////////
// callbacks Traversy


 const postscall =  [
    {title: 'one', body: 'this is one'},
    {title: 'two', body: 'this is two'}
];
function getpostsCall(){
    setTimeout(() => {
        let output = '';
        postscall.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>`
        })
        document.getElementById('main1').innerHTML = output;
    }, 1000)
}

function createPostCall(post, callback) {
    setTimeout(() => {
        postscall.push(post)
        callback();
    }, 3000);
}
getpostsCall();
createPostCall({title: 'three', body: 'this is three'}, getpostsCall);


////////////////////////////////////////
// Promise Traversy
const postsPromise =  [
    {title: 'one', body: 'this is one'},
    {title: 'two', body: 'this is two'}
];
function getpostsPromise(){
    setTimeout(() => {
        let output = '';
        postsPromise.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>`
        })
        document.getElementById('main2').innerHTML = output;
    }, 4000)
}

function createPostPromise(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsPromise.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('something went wrong');
            }
        }, 6000);
    });
};

//// using the normal .then
createPostPromise({title: 'three', body: 'this is three'})
.then(getpostsPromise)
.catch(err => console.log(err));

//// using promise .all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 8000, 'Goodbye!')
    );
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


////////////////////////////////////////
// Async Await Traversy

const postsAsyncAwait =  [
    {title: 'one', body: 'this is one'},
    {title: 'two', body: 'this is two'}
];
function getpostsAsyncAwait(){
    setTimeout(() => {
        let output = '';
        postsAsyncAwait.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>`
        })
        document.getElementById('main3').innerHTML = output;
    }, 8000)
};

function createPostAsyncAwait(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsAsyncAwait.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('something went wrong');
            }
        }, 10000);
    });
};


async function init() {
    await createPostAsyncAwait({title: 'three', body: 'this is three'});

    getpostsAsyncAwait();
};

init();

////////////////////////////////////////
// Async Await with Fetch Traversy

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

    let output = 'USERS API'
    data.forEach(user => {
        output +=   `<ul>
                    <li>Name : ${user.name} </li> 
                    <li>email : ${user.email} </li>
                    </ul> `
    })
    document.getElementById('main4').innerHTML = output;
};

fetchUsers();