let CalledTextArea = document.getElementById("calledTxtFile");
CalledTextArea.innerHTML = "Click to get the sample txt file through AJAX";

let textInput = document.getElementById("textInput");

const CallFileBtn = document.getElementById("callFile");
CallFileBtn.addEventListener("click", LoadText);

function LoadText() {
  // 1 - create the XHR object
  var xhr = new XMLHttpRequest();
  // 2 - open function: type, url/file, async
  xhr.open("GET", "../sample.txt", true);
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


