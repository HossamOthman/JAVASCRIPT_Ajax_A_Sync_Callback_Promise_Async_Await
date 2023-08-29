////////////////////////////////////////////////////////////////
// AJAX
let ajaxText = document.getElementById('AJAXTxt');
ajaxText.innerHTML = "Click to find universities in the <B>USA</B> using AJAX!"

function showUniversitiesAJAX() {
    ajaxText.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Ajax success... wait for the Paragraph to load!')
            let universities = JSON.parse(this.response);
            universities.forEach(uni => {
                const uniCard = document.createElement('li');
                uniCard.innerHTML = `${uni.name}: ${uni.web_pages} `
                ajaxText.appendChild(uniCard)
            });
        }
    }
    xhr.send()
};

////////////////////////////////////////////////////////////////
// Async vs Sync
// Sync
let syncText1 = document.getElementById('synctxt1');
let syncText2 = document.getElementById('synctxt2');
    syncText1.innerHTML = "Click to load a counter synchronously <u>3 seconds delay</u> and then a text";
    syncText2.innerHTML = "...and then a text.";

function showTextSync() {
    syncText1.innerHTML = "";
    syncText2.innerHTML = "";
    console.log(`Sync success... wait for the Paragraph to load!`);
    let count = 0;
    const delay = 3000;
        function processLoopAndAppend() {
            for (let i = 0; i < 50; i++) {  
                const countElem = document.createElement('li');
                count++
                countElem.innerHTML = count;
                syncText1.appendChild(countElem)         
            } 

            const oText = document.createElement('h4');
            oText.innerHTML = "this text came after the loop iteration";
            syncText2.appendChild(oText);
    }
    setTimeout(processLoopAndAppend, delay);
}

////////////////////////////////////////////////////////////////
// Async & Callback
const callbackBtn = document.getElementById('asyncCallback');
let asyncCallbackTxt = document.getElementById('asyncCallbackTxt');
asyncCallbackTxt.innerHTML = "Click to find universities in the <B>UK</B> using Callback!"

function asyncCallbackFunc(){
    asyncCallbackTxt.innerHTML = "";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+Kingdom', true)

    
        xhr.onload = function() {
            if (xhr.status === 200) {
            gathertext.call(xhr);
        }
    };
    xhr.send()
}

function gathertext() {
        console.log('callback success... wait for the Paragraph to load!');
        
        let universities = JSON.parse(this.responseText);
        universities.forEach(uni => {
            const uniCard = document.createElement('li');
            uniCard.innerHTML = `${uni.name}: ${uni.web_pages} `
            asyncCallbackTxt.appendChild(uniCard)
        });
}

callbackBtn.addEventListener('click', asyncCallbackFunc)


////////////////////////////////////////////////////////////////
// Async & Promise
const promiseBtn = document.getElementById('promiseBtn');
let asyncPromisedTxt = document.getElementById('PromisedTxt');
asyncPromisedTxt.innerHTML = "Click to find universities in the <B>Austeria</B> using Promise!";

function promiseFunc(){
    asyncPromisedTxt.innerHTML = "";

    fetch('http://universities.hipolabs.com/search?country=Austria')
    .then(responseText => {
        return responseText.json()
    }).then(jsonData => {
            console.log('Promise success... wait for the Paragraph to load!')

            jsonData.forEach(uni => {
                const uniCard = document.createElement('li');
                uniCard.innerHTML = `${uni.name}: ${uni.web_pages} `
                asyncPromisedTxt.appendChild(uniCard)
            });
    }).catch(err => {
        console.log('errors:' + err.message)
    })
}


promiseBtn.addEventListener('click', promiseFunc);

////////////////////////////////////////////////////////////////
// Async & Await
const asyncAwaitBtn = document.getElementById('asyncAwaitBtn');
let asyncAwaitTxt = document.getElementById('asyncAwaitTxt');
asyncAwaitTxt.innerHTML = "Click to find universities in the <B>Germany</B> using Async Await!";

async function asyncAwaitFunc() {
    try {
        asyncAwaitTxt.innerHTML = "";
        const responseText = await fetch('http://universities.hipolabs.com/search?country=Germany');
        const data = await responseText.json();
        console.log('Async success... wait for the Paragraph to load!')
        data.forEach(uni => {
            const uniCard = document.createElement('li');
            uniCard.innerHTML = `${uni.name}: ${uni.web_pages} `
            asyncAwaitTxt.appendChild(uniCard)
        });
    } catch (err) {
        console.log('errors: ' + err.message)
    }
}


asyncAwaitBtn.addEventListener('click', asyncAwaitFunc);