////////////////////////////////
// Get Text
document.getElementById('getText').addEventListener('click', getText);

function getText() {
    // fetch('../samples/sample.txt')
    // .then(function(res){
    //    return res.text();
    // })
    // .then(function(data) {
    //     console.log(data)
    // });
 // Arrow Functions
 fetch('../samples/sample.txt')
 .then((res) => res.text())
 .then((data) => {
    document.getElementById('target1').innerHTML = data;
 })
 .catch((err) => console.log(err))
};

////////////////////////////////
// Get JSON