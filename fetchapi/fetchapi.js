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