let names = [];
let i=0;

// function check(){
//     var input = document.getElementById("name");
// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     added(input.value);
//   }
// });
// }

function added(name){
    names[i++] = name;
    console.log(names);
    document.getElementById('name').value.innerHTML= "";
}
function putnames(){
    let result = '';
    const element = document.getElementById('names-container');
    for(let j=0;j<names.length;j++){
        result += `<div>${names[j]}</div>`;
    }
    element.innerHTML = result;
    console.log(result);
}

function remove_elements(){
    const element = document.getElementById("container").remove();
    putnames();
}
