// ajax call file
let CalledTextArea = document.getElementById("calledTxtFile");
CalledTextArea.innerHTML = "Click to get the sample txt file through AJAX";

let textInput = document.getElementById("textInput");

const CallFileBtn = document.getElementById("callFile");
CallFileBtn.addEventListener("click", LoadText);

function LoadText() {
  // 1 - create the XHR object
  var xhr = new XMLHttpRequest();
  // 2 - open function: type, url/file, async
  xhr.open("GET", "../samples/sample.txt", true);
  // 3 - now we use onload or onreadystatechange
  xhr.onload = function () {
    if (this.status == 200) {
        //   console.log(this.responseText);
      // 3.3 - just filling the text inside the inner html of the div we created
      CalledTextArea.innerHTML = this.responseText;
      textInput.innerHTML = "the text was received successfully!";
    }
      // 3.5 - else if file not found
    else if (this.status == 404) {
      console.log("file not found");
      textInput.innerHTML = "file not found";
    }
  };
     // 3.7 - it's good to add onerror
  xhr.onerror = function () {
    console.log("Request Error...");
  };
  // 4 - right after the onload function we still need to do SEND()
  xhr.send();
}

////////////////////////////////////
// ajax local json
// call an object

document.getElementById('callObject').addEventListener('click', LoadUser );

function LoadUser() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../samples/user.json', true)

    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            
            var output = '';

            output +=   '<ul>' + 
                            '<li>ID:' + user.id + '</li>' +
                            '<li>Name: ' + user.name + '</li>' +
                            '<li>Email: ' + user.email + '</li>' +
                        '<ul>';
            document.getElementById('calledObjectFile').innerHTML = output;
        }
    }

    xhr.send();

}
////////////////////////////////////
// ajax local json
// call an array of objects

document.getElementById('callArrayOfOBjects').addEventListener('click', LoadUsers );

function LoadUsers() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '../samples/Users.json', true)

    xhr.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            var output = '';
            data.forEach(user => {
                output +=   '<ul>' + 
                                '<li>ID:' + user.id + '</li>' +
                                '<li>Name: ' + user.name + '</li>' +
                                '<li>Email: ' + user.email + '</li>' +
                            '<ul>';
                            document.getElementById('calledArrayFile').innerHTML = output;
            });
            
            
        }
    }

    xhr.send();
};

////////////////////////////////////
// ajax external api

document.getElementById('callExternalAPI').addEventListener('click', loadFrmGithub);

let ExternalAPIInput = document.getElementById('ExternalAPIInput');

function loadFrmGithub() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true)

    xhr.onload = function() {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            
            var output = '';
            var count = 0;
            data.forEach(user => {
                count++;
                output += 
                `<div class="gitUser"> 
                <img src="${user.avatar_url}" width="70px" height="70px" >
                <ul> 
                    <li>Count: ${count} </li>
                    <li>ID: ${user.id} </li>
                    <li>ID: ${user.login} </li>
                </ul> 
                </div>`

                document.getElementById('calledExternalAPI').innerHTML = output;
            });
            ExternalAPIInput.innerHTML = `you have ${count} users`
        }
    }
    xhr.send();
};