
// AJAX
const ajaxText = document.getElementById('AJAXtxt');

function showUniversities() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://universities.hipolabs.com/search?country=United+States', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success... wait for the Paragraph to load!')
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