////////////////////////////////////////////////////////////////
// AJAX
let ajaxText = document.getElementById('AJAXTxt');

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


// Async & Callback
const button = document.getElementById('asyncCallback');
let asyncCallbackTxt = document.getElementById('asyncCallbackTxt');

function asyncCallbackFunc(){
    asyncCallbackTxt.innerHTML = "";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States', true)

    
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

button.addEventListener('click', asyncCallbackFunc)

