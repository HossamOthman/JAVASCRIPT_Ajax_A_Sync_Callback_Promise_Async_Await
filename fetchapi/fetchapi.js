////////////////////////////////
// Get Text
document.getElementById("getText").addEventListener("click", getText);

function getText() {
  // fetch('../samples/sample.txt')
  // .then(function(res){
  //    return res.text();
  // })
  // .then(function(data) {
  //     console.log(data)
  // });
  // Arrow Functions
  fetch("../samples/sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("target1").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

////////////////////////////////
// Get JSON
document.getElementById("getJSON").addEventListener("click", getJSON);

function getJSON() {
  fetch("../samples/Users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h4>Users</h4>";
      data.forEach((users) => {
        output += `<ul class="users">
                                                        <li>ID: ${users.id}</li>
                                                        <li>Name: ${users.name}</li>
                                                        <li>Email: ${users.email}</li>
                                                        </ul>`;
      });
      document.getElementById("target1").innerHTML = output;
    });
}
////////////////////////////////
// Get API
document.getElementById("getAPI").addEventListener("click", getAPI);


    
function getAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let output = "<h3>Posts</h3>";
        data.forEach((post) => {
          output += `<div class="posts">
                            <h4>Title: ${post.title}</h4>
                            <p>Body: ${post.body}</p>

                    </div>`;
        });
        document.getElementById("target1").innerHTML = output;
      });
}
////////////////////////////////
// Post
document.getElementById("addPost").addEventListener("submit", addPost);

function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body}) 
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let output = "<h3>Data to be posted to the API server</h3>";
        
            output += `<div class="posts">
                              <h4>Title: ${data.title}</h4>
                              <p>Body: ${data.body}</p>
  
                      </div>`;
          
          document.getElementById("target2").innerHTML = output;
    })
}