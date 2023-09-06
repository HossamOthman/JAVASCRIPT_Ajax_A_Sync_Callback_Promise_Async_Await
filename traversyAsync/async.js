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
    }, 2000)
}

function createPostCall(post, callback) {
    setTimeout(() => {
        postscall.push(post)
        callback();
    }, 4000);
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
    }, 2000)
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
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));


////////////////////////////////////////
// Async Await Traversy


